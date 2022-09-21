import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";
import dotenv from "dotenv";
dotenv.config();
import { Starbucks } from "./models/starbucks.model.js";
import { User } from "./models/user.model.js";
import { Token } from "./models/token.model.js";
import { getToken, CheckPhone, sendTokenToSMS } from "./phone.js";
import { getWelcomeTemplate, CheckPersonal, sendTemplateToEmail } from "./email.js";

import * as scrap from "./scraping.js";
const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

// [1] 회원가입 API : post/user

// 1. front에서 API 요청시 name, email, personal, prefer, pwd, phone를 backend 서버로 보내기

app.post("/user", async (req, res) => {
    console.log(req.body);

    const { name, email, personal, prefer, pwd, phone } = req.body;

    const og = await scrap.ogMessage(prefer);
    const Personal = CheckPersonal(personal);
    // 2. 입력받은 핸드폰 번호로 token 문서 검색해 해당 번호의 isAuth가 true인지 확인하기

    //  if문에 조건을 핸드폰번호없거나 isAuth false일때 조건으로 하고  else에서 true일때로
    // 핸드폰 번호가 없거나 isAuth가 false 라면 로직
    // 1. 클라이언트에게 422상태코드와 "에러!! 핸드폰 번호가 인증되지 않았습니다. " 반환하기
    const res_token = await Token.findOne({ phone: phone });
    // console.log("THIS IS FUCKING IDIOT : " + res_token);
    if (res_token == null || res_token.isAuth != true) {
        return res.status(422).send("에러! 핸드폰 번호가 인증되지 않았습니다.");
        // isAuth가 true 라면 로직
        // 1. prefer 를 cheerio를 통해 scraping 하고 OG태그 정보를 다른 입력받은 정보와 함께 user DB에 저장
        // 2. OG 객체에 { title, description, image} 들어가야함.
        // 3. personal 뒷자리를  *로 바뀐 후 저장하기
    } else {
        const user = new User({
            name,
            email,
            prefer,
            pwd,
            phone,
            personal: Personal,
            og: og,
        });
        // console.log(user);

        await user.save();

        const email_res = sendTemplateToEmail(email, getWelcomeTemplate({ name, phone, prefer }));
        res.send(user._id);
    }

    // 4. DB 저장 후 회원 가입 환영 이메일 전송하기

    // res.status(200)
    //     .send("가입완료!!")
    // 5. 생성된 user의 _id를  클라이언트에 반환하기
});

// [2] 회원목록조회 API : get/users

// 1. front API 요청시 DB에 저장된 user 데이터 목록 응답 보내기
// 2. 데이터는 name, email, personal, prefer, phone, og 객체(오픈그래프 정보 title, description, image) 포함하기
app.get("/users", async (req, res) => {
    const user = await User.find();
    res.send(user);
});

// [3] 토큰인증요청 API : post /tokens/phone

// 1. front API 요청시 입력 받은 핸드폰 번호를 backend 서버로 보내기
app.post("/tokens/phone", async (req, res) => {
    const myPhone = req.body.myPhone;
    console.log(myPhone);

    const isValid = CheckPhone(myPhone);
    if (isValid === false) return;

    //   // 2. 토큰을 생성하기
    const myToken = getToken();

    // 6. 해당 핸드폰 번호가 이미 `Tokens` 문서에 저장되어 있다면 최신 토큰으로 덮어씁니다.
    if (await Token.findOne({ phone: myPhone })) {
        await Token.updateOne({ phone: myPhone }, { token: myToken });
    } else {
        // 5. 핸드폰 번호와 토큰, 그리고 isAuth는 false 값으로 DB에 저장하기
        const token = new Token({
            token: myToken,
            phone: myPhone,
            isAuth: false,
        });
        await token.save();
    }

    // 3. 입력받은 핸드폰 번호로 생성한 토큰을 문자로 전송하기
    sendTokenToSMS(myPhone, myToken);

    // 7. 클라이언트에 응답으로 “핸드폰으로 인증 문자가 전송되었습니다!”를 보내줍니다.
    res.send("핸드폰으로 인증 문자가 전송되었습니다!");
});

// [4] 인증 완료 API: patch /tokens/phone
app.patch("/tokens/phone", async (req, res) => {
    // 1. front API 요청시 입력 받은 핸드폰 번호를  DB에서 찾아보고
    // 2. 해당번호가 없거나 저장된 핸드폰 번호와
    const { myToken, myPhone } = req.body;
    if (!(await Token.findOne({ phone: myPhone }))) {
        return res.send(false);
        //  토큰과 다르다면 클라이언트에 false를 응답하기
    } else if (!(await Token.findOne({ token: myToken }))) {
        return res.send(false);

        // 3. 토큰이 일치하고, isAuth가 false라면 true 로 변경하여 DB에 저장하고 클라이언트에 true를 응답하기
    } else {
        await Token.updateOne({ token: myToken }, { isAuth: true });
        return res.send(true);
    }
});

// [5] 스타벅스 커피 목록 조회API: get /starbucks
app.get("/starbucks", async (req, res) => {
    //   // 1. DB에 저장된 커피의 목록 반환하기 (커피 데이터에는 img, name, _id가 포함)
    const starbucks = await Starbucks.find();
    res.send(starbucks);
});

mongoose.connect("mongodb://mini-project-database:27017/my-mini-project01").catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log("서버 프로그램 Open");
});
