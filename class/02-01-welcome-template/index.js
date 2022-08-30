// Template Literal 연습하기.

const apple = 3;
const banana = 2;
// prettier-ignore
console.log("철수는 사과를 " + apple + "개, " + "바나나를 " + banana +"개 가지고 있습니다.");
console.log(`철수는 사과를 ${apple}개, 바나나를 ${banana}개 가지고 있습니다.`);

// 회원가입 -> email에  "~님 가입을 축하합니다." (다음주 실제 이메일로 보내는것을 실습할것임.)

// function getWelcomeTemplate(name, age, school, createdAt) {
//   const myTemplate = `

//     <html>
//         <body>
//             <h1>${name}님 가입을 환영합니다.</h1>
//             <hr/>
//             <div>이름:${name}</div>
//             <div>나이:${age}</div>
//             <div>학교: ${school}</div>
//             <div>가입일: ${createdAt}</div>
//         </body>
//     </html>`;

//   console.log(myTemplate);
// }
// getWelcomeTemplate("영희", 12, "토끼초등학교", "2022-08-30"); ==> 결과값이 정적인것을 동적으로 변경필요.

// 문제점!
// 4개중 실행시 마지막에 값을 안넣으면 어떻게 되냐? 언디파인드가 나옴.
// 문제는 가운데 school을 실수로 빠트렸을때 문제가 됨.

// function getWelcomeTemplate(name, age, school, createdAt) {
//   const myTemplate = `

//       <html>
//           <body>
//               <h1>${name}님 가입을 환영합니다.</h1>
//               <hr/>
//               <div>이름:${name}</div>
//               <div>나이:${age}</div>
//               <div>학교: ${school}</div>
//               <div>가입일: ${createdAt}</div>
//           </body>
//       </html>`;

//   console.log(myTemplate);
// }

// const myname = "훈이";
// const myage = 10;
// const myschool = "공룡초등학교";
// const mycreatedAt = "2022-08-30";

// getWelcomeTemplate(myname, myage, myschool, mycreatedAt);

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
