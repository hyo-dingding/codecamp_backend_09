function getWelcomeTemplate({ name, age, school, createdAt }) {
  const myTemplate = `
      
        <html>  
            <body>
                <h1>${name}님 가입을 환영합니다.</h1>
                <hr/> 
                <div>이름:${name}</div>
                <div>나이:${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div> 
                <div>가입일: 2022-10-10</div>  // 하드코딩 하는 이유 
            </body>
        </html>`;

  console.log(myTemplate);
}

const name = "훈이";
const age = 10;
const school = "공룡초등학교";
const createdAt = "2022-08-30";

getWelcomeTemplate({ name, age, school, createdAt });

// 똑같은 이름에 값이 들어가게됨. my뺐음.
// 인자와 매개변수가 같음. ->  더안전한 코드로 바뀜
// 객체로 왜 감싸주는걸까?
