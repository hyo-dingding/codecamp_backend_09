import mongoose from "mongoose";
// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
const UserSchema = new mongoose.Schema({
  // author: ObjectId,
  name: String,
  email: String,
  personal: String,
  pwd: String,
  phone: String,
  prefer: String,
  og: {
    title: String,
    description: String,
    image: String,
  },
});

export const User = mongoose.model("user", UserSchema);
