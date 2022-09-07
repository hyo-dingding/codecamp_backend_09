import mongoose from "mongoose";

const TokenSchema = new mongoose.Schema({
  // _id: String,
  token: String,
  phone: String,
  isAuth: Boolean,
});

export const Token = mongoose.model("Token", TokenSchema);
