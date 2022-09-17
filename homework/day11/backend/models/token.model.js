import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: String,
  __v: Number,
});

export const Token = mongoose.model("token", TokenSchema);
