import mongoose from "mongoose";

const StarbucksSchema = new mongoose.Schema({
  name: String,
  img: String,
  __v: Number,
});

export const Starbucks = mongoose.model("starbucks", StarbucksSchema);
