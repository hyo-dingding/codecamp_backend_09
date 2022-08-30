// 1. shorthand_property

// function qqq(aaa) {
//   console.log(aaa);
//   console.log(aaa.name); // 철수
//   console.log(aaa.age); // 12
//   console.log(aaa.school); // 다람쥐초등학교
// }
// const profile = {
//   name: "철수",
//   age: 12,
//   school: "다람쥐초등학교",
// };

// qqq(profile);
// ---------------------------------------
// function qqq(aaa) {
//   console.log(aaa);
//   console.log(aaa.name); // 철수
//   console.log(aaa.age); // 12
//   console.log(aaa.school); // 다람쥐초등학교
// }
// const zzz = "철수";
// const xxx = 12;
// const ccc = "다람쥐초등학교";

// const profile = {
//   name: zzz,
//   age: xxx,
//   school: ccc,
// };

// qqq(profile);
// -----------------------------------------------
// 둘다 동일함. 왜 했지?
// 철수를 네임이라는변수에 담아보자

function qqq(aaa) {
  console.log(aaa);
  console.log(aaa.name); // 철수
  console.log(aaa.age); // 12
  console.log(aaa.school); // 다람쥐초등학교
}
const name = "철수";
const age = 12;
const school = "다람쥐초등학교";

// const profile ={
//     name: name,
//     age:age,
//     school:school
// }
// shorthand property: 객체에서 key와 value가 같으면 value 를 생략함. 결과는 동일
// const profile = { name, age, school }; // shorthand property

// qqq(profile);
qqq({ name, age, school }); // 둘다 결과는 동일
// -------------------------------------------

// 2. destructuring

// [원본]
// function www(aaa){

//  console.log(aaa);
//   // { apple: 3, banana: 10 } ===> const aaa = basket 과 같은 얘기
//   // const aaa = { apple: 3, banana: 10 } 이것과 동일한 얘기
//   // const { apple, banana } = { apple: 3, banana: 10 } 이런방식으로 구조분해 할당 가능.
// }

// [구조분해할당해서 받자 ]
function www({ apple, banana }) {
  // 결론은  const {apple, banana } = basket
}
const basket = {
  apple: 3,
  banana: 10,
};
www(basket);
