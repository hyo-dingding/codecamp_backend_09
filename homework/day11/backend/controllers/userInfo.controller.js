import dotenv from "dotenv";
dotenv.config();
import { Starbucks } from "../models/starbucks.model.js";
import { User } from "../models/user.model.js";
import { Token } from "../models/token.model.js";
import { getToken, CheckPhone, sendTokenToSMS } from "./services/phone.js";
import { getWelcomeTemplate, CheckPersonal, sendTemplateToEmail } from "./services/email.js";
import * as scrap from "../scraping.js";

export class UserInfoController {
    // [1] 회원목록조회 API : get/users
    userList = async (req, res) => {
        const user = await User.find();
        res.send(user);
    };

    // [2] 회원가입 API : post/user

    createUser = async (req, res) => {
        console.log(req.body);

        const { name, email, personal, prefer, pwd, phone } = req.body;

        const og = await scrap.ogMessage(prefer);
        const Personal = CheckPersonal(personal);

        if (!(await Token.findOne({ phone: phone })) || (await Token.findOne({ isAuth: false }))) {
            return res.status(422).send("에러! 핸드폰 번호가 인증되지 않았습니다.");
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
    };
    // [3] 토큰인증요청 API : post /tokens/phone
    checkToken = async (req, res) => {
        const myPhone = req.body.myPhone;
        console.log(myPhone);

        const isValid = CheckPhone(myPhone);
        if (isValid === false) return;

        const myToken = getToken();

        if (await Token.findOne({ phone: myPhone })) {
            await Token.updateOne({ phone: myPhone }, { token: myToken });
        } else {
            const token = new Token({
                token: myToken,
                phone: myPhone,
                isAuth: false,
            });
            await token.save();
        }

        sendTokenToSMS(myPhone, myToken);

        res.send("핸드폰으로 인증 문자가 전송되었습니다!");
    };
    // [4] 인증 완료 API: patch /tokens/phone
    submitToken = async (req, res) => {
        const { myToken, myPhone } = req.body;
        if (!(await Token.findOne({ phone: myPhone }))) {
            return res.send(false);
        } else if (!(await Token.findOne({ token: myToken }))) {
            return res.send(false);
        } else {
            await Token.updateOne({ token: myToken }, { isAuth: true });
            return res.send(true);
        }
    };
    // [5] 스타벅스 커피 목록 조회API: get /starbucks
    starbucksList = async (req, res) => {
        const starbucks = await Starbucks.find();
        res.send(starbucks);
    };
}
