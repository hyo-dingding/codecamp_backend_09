function getWelcomeTemplate({ email, registrationNumber, phone, web }) {
  const myTemplate = `
            <html>
                <body>
                    <h1>코드캠프님 가입을 환영합니다!!!</h1>
                    <hr />
                    <div>이메일: ${email}</div>
                    <div>주민번호: ${registrationNumber}</div>
                    <div>휴대폰 번호: ${phone}</div>
                    <div>내가 좋아하는 사이트: ${web}</div>
                </body>
            </html>
        `;

  console.log(myTemplate);
  return myTemplate;
}

const email = "Hyoding@gmail.com";
const registrationNumber = "210510-1******";
const phone = "010-1234-5678";
const web = "https://www.naver.com/";

getWelcomeTemplate({ email, registrationNumber, phone, web });
