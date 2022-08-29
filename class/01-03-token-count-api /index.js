// api를 어떻게 만들까? 흉내내보기

function createTokenOfPhone(myPhone) {
  // 1. 핸드폰번호 자릿수 맞는지 확인하기.(틀리면 에러메세지 보내기 / 맞으면 2번으로 가야함 )
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생!! 핸드폰번호를 제대로 입력해주세요!!");
    return;
  }
  // 2. 핸드폰 토큰 6자리 만들기.(getToken)
  const count = 6;
  if (count === undefined) {
    console.log("에러발생!! 갯수를 제대로 입력해주세요!");
    result;
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
  console.log(result);

  // 3. 핸드폰번호에 토큰 전송하기.
  console.log(myPhone + "번호로 인증번호" + result + "를 전송합니다!");
// }

// createTokenOfPhone("01012345678"); // 사용자가 입력한값 핸드폰번호가

// 오늘은 콘솔에 남기는정도만.
// 주석이 없다라고 가정. 코드 읽을 수 있니? 유지보수 좋지 않음.
// 리팩토링 가능?

// 퍼사드패턴 코드리팩토링을 위한 퍼사드패턴
// Facade 코드 만들어놓고 성벽을 쌓는다
// 성벽안에있는건 굳이궁금해하지 말자

// getPhone();
// checkPhone();

// 각각하나의 펑셩으로 빼고 이해하기 쉬운 이름으로 바꾼다.
function createTokenOfPhone(myPhone) {
  // 1. 핸드폰번호 자릿수 맞는지 확인하기.(틀리면 에러메세지 보내기 / 맞으면 2번으로 가야함 )
  if (myPhone.length !== 10 && myPhone.length !== 11) {
    console.log("에러발생!! 핸드폰번호를 제대로 입력해주세요!!");
    return;
  }
  // 2. 핸드폰 토큰 6자리 만들기.(getToken)
  const count = 6;
  if (count === undefined) {
    console.log("에러발생!! 갯수를 제대로 입력해주세요!");
    result;
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
  console.log(result);

  // 3. 핸드폰번호에 토큰 전송하기.
  console.log(myPhone + "번호로 인증번호" + result + "를 전송합니다!");
}

createTokenOfPhone("01012345678"); // 사용자가 입력한값 핸드폰번호가
