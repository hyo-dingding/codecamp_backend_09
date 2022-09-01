// const express = require("express");  옛날방식
import express from "express"; // 최신방식
const app = express();

app.get("/boards", function (req, res) {
  res.send("게시물 등록에 성공했습니다."); // frontend 에 보내줄 응답 적는곳
}); // API "/endPoint" , 함수 (req: 요청, res:응답)

// app.post("/boards", function (req, res){

// })

app.listen(3000, () => {
  console.log("서버 프로그램을 켜는데 성공했어요");
}); // 서버  listen : 다른사람의 접속을 24시간동안 계속 기다리는애(port)
