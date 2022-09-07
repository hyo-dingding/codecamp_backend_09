import { getToken, CheckPhone, sendTokenToSMS } from "./phone.js";
import { Token } from "./models/token.model.js";

import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/tokens/phone", async (req, res) => {
  const myPhone = req.body.myPhone;
  console.log(myPhone);

  // 핸드폰번호 자릿수 맞는지 확인하기.
  const isValid = CheckPhone(myPhone);
  if (isValid === false) return;

  // 핸드폰 인증 토큰 생성하기
  const myToken = getToken();

  // 핸드폰번호가 DB에 저장되 있으면 토큰 업데이트 해주고
  if (await Token.findOne({ phone: myPhone })) {
    await Token.updateOne({ phone: myPhone }, { token: myToken });
  } else {
    // 없으면 DB에 새로 저장해주기
    const token = new Token({
      token: myToken,
      phone: myPhone,
      isAuth: false,
    });
    // DB에 접속해서 데이터 저장하기
    await token.save();
  }

  // 3. 핸드폰번호에 토큰 전송하기.
  sendTokenToSMS(myPhone, myToken);
  res.send(
    myPhone.slice(0, 3) +
      "-" +
      myPhone.slice(3, 7) +
      "-" +
      myPhone.slice(7, 11) +
      "으로  인증 문자가 전송되었습니다."
  );

  // postman 요청 결과주기
  res.send(`${myToken}인증번호 전송에 성공하셨습니다.`);
});

// --------------------------------------------------

app.patch("/tokens/phone", async (req, res) => {
  // const myPhone = req.body.myPhone;
  const { myToken, myPhone } = req.body;

  // 핸드폰 번호가 DB에 저장되있지 않으면 클라이언트 응답으로 false를 주고
  if (!(await Token.findOne({ phone: myPhone }))) {
    return res.send(false);
    // token 이 일치하지 않으면 클라이언트 응답으로 false를 주기
  } else if (!(await Token.findOne({ token: myToken }))) {
    return res.send(false);
    //
  } else {
    // 일치하면 isAuth를 true로 변경하여 DB에 저장후 클라이언트에 true 응답하기.
    await Token.updateOne({ token: myToken }, { isAuth: true });
    return res.send(true);
  }
});

await mongoose.connect("mongodb://my-database:27017/my-token");

app.listen(port, () => {
  console.log("서버 프로그램 켜는데 성공했어요");
});
