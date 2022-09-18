import { getToday } from "../../utils.js"; //js 꼭 붙여야함.
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export function CheckPersonal(Personal) {
  const personal = Personal.replace(/(?<=.{6})./gi, "*");
  console.log(Personal);
  return personal;
}

export function checkEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러 발생!!! 이메일 주소를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, phone, prefer }) {
  // const {age, createdAt} = { name, age, school, createdAt }

  const mytemplate = `
          <html>
              <div style="display: flex; flex-direction: column; align-items: center;>
              <div width: 500px";>
                  <h1>${name}님 가입을 환영합니다!!!</h1>
                  <hr />
                  <div style="color:red">이름: ${name}</div>
                  <div>핸드폰: ${phone}</div>
                  <div>좋아하는 사이트: ${prefer}</div>
                  <div>가입일: ${getToday()}</div>
              </div>
              </div>
          </html>
      `;
  return mytemplate;
  // console.log(mytemplate)
}

export async function sendTemplateToEmail(myemail, result) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const response = await transporter
    .sendMail({
      from: process.env.EMAIL_SENDER,
      to: myemail,
      subject: "가입을 축하합니다!!",
      html: result,
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(response);

  // console.log( myemail + "이메일로 가입환영템플릿 " + result + "를 전송합니다!!!");
}