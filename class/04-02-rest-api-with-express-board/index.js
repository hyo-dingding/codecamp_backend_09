import express from "express";
import { getToken, CheckPhone, sendTokenToSMS } from "./phone.js";
// rest_api 연습
const app = express();
app.use(express.json()); // 다 객체로 바꿔줘  1. 설정기능 (읽을수 있게 허락해줘) 2.
app.get("/boards", function (req, res) {
  // 1. 데이터 조회하는 로직 = DB접속해서 데이터 꺼내오기
  // 그리고 꺼내온 결과를 변수에 담음 배열안에 객체형태로 저장되있음[{ 데이터가 }]
  const result = [
    { Number: 1, writer: "다다", title: "다다입니당", contents: "가가가가" },
    { Number: 1, writer: "나나", title: "나나입니당", contents: "나나나나" },
    { Number: 1, writer: "가가", title: "가가입니당", contents: "다다다다" },
  ];
  // 2. DB에 꺼내온 결과를 브라우저에 응답(response))주기
  res.send(result);
});

app.post("/boards", function (req, res) {
  // 프론트에서 입력 -> 등록하기클릭 -> 우리한테 요청이 날라옴 -> 프론트에서 받아온 데이터 꺼내기 -> DB에 보내기
  // 1. 브라우저에서 보내준 데이터 확인하기

  console.log(req.body);
  // 2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
  //
  // 3. DB에 저장이 됬으면 결과를 브라우저에 응답(response) 주기
  res.send("게시물 등록에 성공하였습니다."); //.status(200) 상태코드 잘보내줘야함. 따로 안붙이면 200 날라감
});

app.post("/tokens/phone", (req, res) => {
  const myPhone = req.body.myPhone;
  // console.log(myPhone, "============");
  // 1. 핸드폰번호 자릿수 맞는지 확인하기.
  const isValid = CheckPhone(myPhone);
  if (isValid === false) return;

  // 2. 핸드폰 토큰 6자리 만들기.(getToken)
  const myToken = getToken();
  // 3. 핸드폰번호에 토큰 전송하기.
  console.log(sendTokenToSMS(myPhone, myToken));

  res.send("인증완료!!");

  // phone.js 만들어서 분리하가
  // 포스트맨에서 마이폰받아서 사용하기.
});

app.listen(3000, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});

// restful하다 기억났당 boards s붙은이유?
// get
// boards 목록조회
// boards/:id 상세조회

// post
// boards 게시글 등록

// 선택시
// post -> Body -> raw (JSON(application/json)) {작성}

// put
// boards/:id 게시글 수정

// delete
// board/:id 게시글 삭제

// 어디서 origin:chrome-extension:포스트맨 어디로 host: 'localhost:3000' 로 요청을 보내는것
// 텍스트인데 사용할때 객체로 받아야함. 제이슨 형테 텍스트를 객체로 받을수있게 작업해줘야함.  app.use()
