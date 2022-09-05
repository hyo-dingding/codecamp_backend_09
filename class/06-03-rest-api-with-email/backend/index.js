// req 받고 res 보내기
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import "dotenv/config"; // 젤 상위 폴더에서 적어주기

import { getToken, CheckPhone, sendTokenToSMS } from "./phone.js";

import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
app.use(
  cors()
  // {origin: "http://127.0.0.1:5500/",}
); // 콜스 허용을 해줘야함
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))); // 설정 API 만들 수 있음 미들웨어 함수
app.get("/boards", function (req, res) {
  const result = [
    { Number: 1, writer: "가가", title: "가가입니당", contents: "가가가가" },
    { Number: 2, writer: "나나", title: "나나입니당", contents: "나나나나" },
    { Number: 3, writer: "다다", title: "다다입니당", contents: "다다다다" },
  ];

  res.send(result);
});

app.post("/boards", function (req, res) {
  console.log(req.body);

  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", (req, res) => {
  const myPhone = req.body.myPhone;

  const isValid = CheckPhone(myPhone);
  if (isValid === false) return;

  const myToken = getToken();

  console.log(sendTokenToSMS(myPhone, myToken));
  res.send("인증완료!!");
});

app.post("/users", function (req, res) {
  // const name = req.body.name
  // const age = req.body.age
  // const school = req.body.school
  // const email = req.body.email
  const { name, age, school, email } = req.body;

  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = checkEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const mytemplate = getWelcomeTemplate({ name, age, school, email });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTemplateToEmail(email, mytemplate);
  res.send("가입완료!!");
});

app.listen(3000, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});
