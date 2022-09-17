import express from "express";
import cors from "cors";

import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { options } from "./swagger/config.js";
import swaggerJSDoc from "swagger-jsdoc";
import { UserInfoController } from "./controllers/userInfo.controller.js";

const port = 3000;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

const userInfoController = new UserInfoController();
app.post("/user", userInfoController.createUser);

app.get("/users", userInfoController.userList);

app.post("/tokens/phone", userInfoController.checkToken);

app.patch("/tokens/phone", userInfoController.submitToken);

app.get("/starbucks", userInfoController.starbucksList);

mongoose.connect("mongodb://mini-project-database:27017/my-mini-project01").catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log("서버 프로그램 Open");
});
