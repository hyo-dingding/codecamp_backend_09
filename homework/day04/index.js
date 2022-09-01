import express from "express";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options))); // 설정 API 만들 수 있음 미들웨어 함수
app.get("/users", function (req, res) {
  const result = [
    {
      email: "aaa@gmail.com",
      name: "보라도리",
      phone: "010-1111-5555",
      personal: "220110-111111",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "뚜비",
      phone: "010-1234-5678",
      personal: "220110-2222222",
      prefer: "https://gmail.com",
    },
    {
      email: "aaa@gmail.com",
      name: "나나",
      phone: "010-1234-5678",
      personal: "220110-3333333",
      prefer: "https://naver.com",
    },
    {
      email: "aaa@gmail.com",
      name: "뽀",
      phone: "010-1234-5678",
      personal: "220110-4444444",
      prefer: "https://gmail.com",
    },
    {
      email: "aaa@gmail.com",
      name: "햇님",
      phone: "010-1234-5678",
      personal: "220110-5555555",
      prefer: "https://naver.com",
    },
  ];
  res.send(result);
});
app.post("/users", function (req, res) {
  console.log(req.body);
  res.send("게시물 등록에 성공하였습니다.");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
app.get("/starbucks", function (req, res) {
  const result = [
    { name: "아메리카노", kcal: 5 },
    { name: "바닐라라떼 덜달게", kcal: 2 },
    { name: "카라멜 마끼아또", kcal: 10 },
    { name: "카페모카", kcal: 6 },
    { name: "카페라떼", kcal: 7 },
    { name: "레몬에이드", kcal: 3 },
    { name: "밀크티", kcal: 2 },
    { name: "민트초코 프라푸치노", kcal: 8 },
    { name: "바닐라콜드브루", kcal: 1 },
    { name: "바닐라쉐이크", kcal: 4 },
  ];
  res.send(result);
});

app.post("/starbucks", function (req, res) {
  console.log(req.body);

  res.send("게시물 등록에 성공하였습니다.");
});

app.listen(3000, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});
