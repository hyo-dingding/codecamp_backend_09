// **008. 객체의 선언과 할당**

// **`문제 설명`**

// 주어진 student 객체에

// 'name'이라는 키를 만들고, "철수"를 할당하세요.

// **`주의 사항`**

// - 빈 객체도 만들 수 있습니다.
// - 객체와 배열의 차이점을 잘 구분하세요.

// **`예상 결과`**

// console.log(student) // { name : "철수" }

const student = {};
student.name = "철수";
student["name"] = "철수";

console.log(student);

// **009. 객체의 키&값 추가**

// **`문제 설명`**

// student와 school 두 개의 객체가 있습니다.

// student 객체에 school이라는 객체를 할당해야 합니다.

// **`주의 사항`**

// - 객체 안에 객체를 만들 수 있습니다.

// **`예상 결과`**

// console.log(student) //
// 	{
//     name: '철수',
//     age: 8,
//     school: {
//       name: '다람쥐초등학교',
//       teacher: '다람이'
//     }
//   }

const student = {
  name: "철수",
  age: 8,
};

const school = {
  name: "다람쥐초등학교",
  teacher: "다람이",
};

// student.school= school
student["school"] = school;

console.log(student);
