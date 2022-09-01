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

export function sendTokenToSMS(myPhone, myToken) {
  console.log(myPhone + "번호로 인증번호" + myToken + "를 전송합니다!");
  return `${myPhone} 번호로 인증번호 ${myToken} 를 전송합니다!`;
}
