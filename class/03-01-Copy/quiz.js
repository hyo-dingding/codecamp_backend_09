// 퀴즈 1 얕은복사

const child1 = {
  name: "철수",
  age: 13,
  school: "다람쥐초등학교",
};

const child2 = { ...child1 };
child2.name = "영희";
console.log(child2);
console.log(child1);

// 퀴즈 2 깊은복사
const child1 = {
  name: { first: "김", last: "철수" },
  age: 13,
  school: "다람쥐초등학교",
};
// 새로운 객체를 만들어내는것이 JSON.parse (새객체 만들기.)
const child2 = JSON.parse(JSON.stringify(child1));
child2.name.first = "최";
child2.name.lest = "영희";
console.log(child2);
console.log(child1);

// 궁금증?
// const 로 했는데 값이 왜 변하고 있지?
// 원리 ?
// 저장되있는 객체는 새로운 객체에 저장되있는것이고 주소가 프로필에 저장되는것임.
// 프로필이 가리키고 있는 주소안에 name을 변경하는것이라 그것은 const 가 아니라 변경가능한것이고 child1 = "영희" 이건 안됨.
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

// 꽁꽁 얼려버려라 -> 그럼 프로필의 값도 변하지 않음.
Object.freeze(profile);

// 구조분해 할당

const aaa = ["철수", "영희", "훈이"];
const bbb = ["맹구", "짱구"];
const ccc = [...aaa, ...bbb];

// rest 파라미터 딜리트 delete (원본이 지워지니 좋은방법은 아님. )

const child = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
  money: 2000,
  hobby: "독서",
};
// const child2 = {...child}
// delete child.money
// console.log(child)
// console.log(child2)

const { money, hobby, school, ...rest } = child;

console.log(rest);
console.log(child);
