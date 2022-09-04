import express from "express";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";
import cors from "cors";

const service_port = 3000;
// 서버를 켤 때 오픈 포트를 사전에 변수에 담아 저장해놓고 불러오는 방식으로 적용 해보면 좋을 듯 하고,
// 로그에도 어떤 포트로 열렸는지 표시 해주면 디버깅 시에 유용할 듯 합니다

const app = express();
app.use(cors());
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

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));
// 두번 정의할 필요는 없을 것 같습니다!! 삭제하셔도 될듯 해용

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

// 여기도 POST 방식의 api가 하나더 존재하는 것으로 보입니다 ㅎㅎ 문서 하나 생성해주는것도 좋을듯 해요

app.listen(service_port, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});
