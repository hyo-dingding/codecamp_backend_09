import express from "express";
import swaggerUi from "swagger-ui-express";

import { getToken, CheckPhone, sendTokenToSMS } from "./phone.js";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
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

app.listen(3000, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});
