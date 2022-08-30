function CheckEmail(myemail) {
  if (myemail === undefined || myemail.includes("@") === false) {
    console.log("에러발생!! 이메일 주소를 제대로 입력해 주세요!!");
    return false;
  } else {
    return true;
  }
}

function getWelcomeTemplate() {
  const myTemplate = `<html>  
    <body>
        <h1>${name}님 가입을 환영합니다.</h1>
        <hr/> 
        <div>이름:${name}</div>
        <div>나이:${age}</div>
        <div>학교: ${school}</div>
        <div>가입일: 2022-10-10</div>  
    </body>
    </html>`;
  return myTemplate;
}

function sendTokenToSMS(myemail, result) {
  console.log(myemail + "이메일로 가입환영 템플릿" + result + "를 전송합니다!");
}

// -------------------------
function createUser({ name, age, school, email }) {
  // 1. 이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
  const isValid = CheckEmail(email);
  if (isValid === false) return;

  // 2. 가입환영 템플릿 만들기
  const myTemplate = getWelcomeTemplate({ name, age, school });

  // 3. 이메일에 가입환영 템플릿 전송하기
  sendTokenToSMS(email, myTemplate);
}

const name = "철수";
const age = 8;
const school = "다람쥐초등학교";
const email = "a@a.com";

createUser({ name, age, school, email });
