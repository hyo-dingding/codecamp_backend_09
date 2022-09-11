// req 받고 res 보내기
import express from "express";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import "dotenv/config.js"; // 젤 상위 폴더에서 적어주기
import { getToken, CheckPhone, sendTokenToSMS } from "./phone.js";
import mongoose from "mongoose"; //

import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";
import { Board } from "./models/board.model.js";

const app = express(); // . 하는거 다등록 하는것  app.listen실행 전 몽고디비에 접속먼저하기
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/boards", async function (req, res) {
  // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
  // const result = [
  //   { Number: 1, writer: "가가", title: "가가입니당", contents: "가가가가" },
  //   { Number: 2, writer: "나나", title: "나나입니당", contents: "나나나나" },
  //   { Number: 3, writer: "다다", title: "다다입니당", contents: "다다다다" },
  // ];
  //
  const result = await Board.find();
  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response)주기
  res.send(result);
});

app.post("/boards", async function (req, res) {
  // 1 브라우저에서 보내준 데이터 확인하기
  console.log(req.body);
  // 2. 데이터 등록하는 로직 => DB로 접속해서 데이터 저장하기
  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents,
  });

  await board.save(); // DB에 전송됨

  //3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/tokens/phone", (req, res) => {
  const myPhone = req.body.myPhone;

  const isValid = CheckPhone(myPhone);
  if (isValid === false) return;

  const myToken = getToken();

  console.log(sendTokenToSMS(myPhone, myToken));
  res.send("인증완료!!!");
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

//  mongodb접속! 잘되는가 확인 이름을 가지고 연결한다.(네임리졸루션)
mongoose.connect("mongodb://my-database:27017/my-docker04");

// backend api접속
app.listen(3000, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});

// 1. mongodb접속! 잘되는가 확인
// 2. 등록이잘되는가?
// 3. 조회목록 api로 확인하기
