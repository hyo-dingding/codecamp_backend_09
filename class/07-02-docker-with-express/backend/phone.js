import "dotenv/config";
import coolsms from "coolsms-node-sdk";
const mysms = coolsms.default;
// console.log(mysms);

export function CheckPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생!! 핸드폰번호를 제대로 입력해주세요!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const count = 6;
  if (count === undefined) {
    console.log("에러발생!! 갯수를 제대로 입력해주세요!");
    return;
  }
  if (count < 2) {
    console.log("에러발생!! 갯수가 너무 작습니다!");
    return;
  }
  if (count >= 10) {
    console.log("에러발생!! 갯수가 너무 많습니다!");
    return;
  }
  const result = String(Math.floor(Math.random() * 10 ** count)).padStart(
    count,
    "0"
  );
  return result;
  // console.log(result);
}
// 환경변수에 넣어놓기
// 가지고 올수 있는기능 .dotenv
export async function sendTokenToSMS(myPhone, myToken) {
  const SMS_KEY = process.env.SMS_KEY; // API키
  const SMS_SECRET = process.env.SMS_SECRET; // API 시크릿
  const SMS_SENDER = process.env.SMS_SENDER;

  const messageService = new mysms(SMS_KEY, SMS_SECRET); // 어떻게 깃허브에 안올리지 ? 환경변수! 파일만들고 저장해놓장
  const response = await messageService.sendOne({
    to: myPhone,
    from: SMS_SENDER,
    text: `[코드캠프] 안녕하세요? 요청하신 인증번호는 ${myToken} 입니다.`,
  });

  console.log(response);

  // endMany : [배열]
  //  sendOne({})

  // .then((res) => console.log(res))
  // .catch((err) => console.error(err));

  // console.log(myPhone + "번호로 인증번호" + myToken + "를 전송합니다!");
  // return `${myPhone} 번호로 인증번호 ${myToken} 를 전송합니다!`;
}
