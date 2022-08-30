// 객체와 배열의 구조분해할당 방식?

// 객체 ==> 이름이 중요(key와 같아야함.) => 객체 (순서는 중요하지 않음.)
const profile = {
  name: "철수",
  age: 8,
  school: "다람쥐 초등학교",
};
// const name = profile.name
const { name, age } = profile;
console.log(name, age); // '철수', 8

// 배열 ==>  순서가 중요 => 배열 (이름은 중요하지 않음.)
const classmates = ["철수", "영희", "훈이"];
const [aaa, bbb] = classmates;

console.log(aaa, bbb); // '철수', '영희'

// ============================================================

// [구조분해할당 퀴즈]

// 1. child 의 age 비구조화 할당하기, console.log(age) 출력하기
const child = {
  name: "영희",
  age: 7,
  school: "토끼초등학교",
};
// const age = child.age

const { age } = child; // child 객체임 거기서 age만 뽑겠다는뜻.
console.log(age);

// 2. getChild()의 school을 비구조화 할당하기, console.log(school)출력하기

function getChild() {
  return {
    name: "철수",
    age: 13,
    school: "다람쥐초등학교",
  };
}
const { school } = getChild();
// 이렇게 쓰면 더 코드를 줄일 수 있음.
// result 에 굳이 안담아줘도됨.
// const result = getChild()
// const {school} = result

console.log(school);

// 3. return 되는 값 작성하기! child1는 영희, child2는 철수 할당 받을 수있게 함수 완성하기
function getClassmates() {
  return ["영희", "철수"];
}
// const [child1, child2] =["영희", "철수"]
const [child1, child2] = getClassmates();
console.log(child1, child2);
// 결과값이 []이기에 return 도 배열로 씀.

// 4. const [child1, child2] = getClassmates("훈이", "맹구") 실행하기. child1는 맹구, child2는 훈이 할당 해주기.
function getClassmates(aaa, bbb) {
  return [bbb, aaa];
}
const [child1, child2] = getClassmates("훈이", "맹구");
// const [child1, child2] = ["맹구","훈이"]
console.log(child1, child2);
