import mongoose from "mongoose";

const BoardSchema = new mongoose.Schema({
  writer: String,
  title: String,
  contents: String,
});
export const Board = mongoose.model("Board", BoardSchema);
// Board collection을 만들건데  BoardSchema 구조 대로 만들어줘

// 1. board collection 만들기
// 2. API 연동
