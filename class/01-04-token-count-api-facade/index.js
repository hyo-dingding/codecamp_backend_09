// 코드 라팩토링을 위한 퍼사트 패턴

function CheckPhone(myPhone) {
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생!! 핸드폰번호를 제대로 입력해주세요!!");
    return false;
  } else {
    return true;
  }
}

function getToken() {
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

function sendTokenToSMS(myPhone, result) {
  console.log(myPhone + "번호로 인증번호" + result + "를 전송합니다!");
}

// ------------------------------------------------------------------
// Facade 코드 만들어놓고 성벽을 쌓는다
// 성벽안에있는건 굳이궁금해하지 말자
// 이것만 보면됨.퍼사드 패턴임. 복잡했던 API가 3단계로 끝나버림.

function createTokenOfPhone(myPhone) {
  // 1. 핸드폰번호 자릿수 맞는지 확인하기.
  const isValid = CheckPhone(myPhone);
  if (isValid === false) return;

  //  연결시켜주기! myPhone 을 인자로 넣어서 매개변수로 받아야함
  // isValid 유효하니?  false(함수종료됨) or true 가 들어오게됨.

  // 2. 토큰 6자리 발급
  const myToken = getToken();

  // 3. 핸드폰번호에 토큰 전송하기.
  sendTokenToSMS(myPhone, myToken);
}

createTokenOfPhone("01012345678");
// 강제로 입력했다 === 하드코딩했다. -> 유저가입력한 값으로 변경되야함(동적으로)
