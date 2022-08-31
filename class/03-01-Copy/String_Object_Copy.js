// copy 란?
// 원본(aaa)이랑 복사본(bbb) 이 있음.
// 복사가 잘됬다는 것은 복사본을 수정한다해도 원본에 손상이 없는것

// String, Number Copy

const aaa = "철수";
const bbb = aaa;
console.log(bbb); // 철수

let aaa1 = "영희";
let bbb1 = aaa1;
console.log(aaa1); // 영희
console.log(bbb1); // 영희

// aaa 의 값바꾸기
// 복사 잘됨. 복사본에 영향을 미치지 않음.
aaa1 = "훈이";
console.log(aaa1); // 훈이
console.log(bbb1); // 영희

// Object Copy

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

const profile2 = profile;
console.log(profile);
console.log(profile2);

profile2.name = "영희";

// 복사본을 변경했는데 원본까지 변경이 됨.

console.log(profile2); //{ name: '영희', age: 12, school: '다람쥐초등학교' }
console.log(profile); // { name: '영희', age: 12, school: '다람쥐초등학교' }

// 값 그 자체가 저장되는 String, Number, Boolen 등과 달리 Object, Array는 해당 데이터를 heap 이라 불리는 저장소에 보관해두고 그 주소값을 저장한다.
// profile이 라는 객체의 주소값이 복사된것이고 그에 따라 원본의 변화가 복사본에게도 영향을 미친것임.
// 저장공간이 따로 있음. 다른공간에 저장이 되고 저장되있는 위치(주소) 위치값이 profile에 들어가게 된다.
// 주소값이 복사된것이기 때문에 원본과 복사본 둘다 주소값이 같아서 내용변경하면 둘다 변경이 적용된다.

//-------------------------------------------------
// Object 1번째 방법

// 핵심은 중괄호가 있느냐 없느냐임. 중괄호가 있어야 새로운 주소가 만들어짐.
// 복사본을 수정해도 원본 값이 변경되지 않음. 반대도 같다.

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

const profile2 = {
  name: profile.name,
  age: profile.age,
  school: profile.school,
};

profile.name = "영희";
console.log(profile); // { name: '영희', age: 12, school: '다람쥐초등학교' }
console.log(profile2); // { name: '철수', age: 12, school: '다람쥐초등학교' }

// 영향이 미치지 않음.
// 너무 쓰는게 많음. (이렇게 쓰면 복사할 이유가 있나)

// Object 2번째 방법(얕은복사 shallow-copy)
// 의미가 있는 복사 spread연산자(흙뿌린다.)쓰기
// 객체와 배열의 복사 흉내내기.

// 1 객체가 하나일 때
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
};

const profile2 = { ...profile };
profile.name = "영희";
console.log(profile); // { name: '영희', age: 12, school: '다람쥐초등학교' }
console.log(profile2); // { name: '철수', age: 12, school: '다람쥐초등학교' }

// 2 객체가 두개일 때
const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
  hobby: {
    hobby1: "수영",
    hobby2: "독서",
  },
};

const profile2 = {
  name: profile.name,
  age: profile.age,
  school: profile.school,
  hobby: profile.hobby, // 이 자체는 주소를 복사한 행위임.
};

// profile.name = "영희"
// console.log(profile) // name: '영희'
// console.log(profile2) // name: '철수'
// 여기까지는 문제 없음.
profile.hobby.hobby1 = "축구";
console.log(profile.hobby); // { hobby1: '축구', hobby2: '독서' }
console.log(profile2.hobby); //{ hobby1: '축구', hobby2: '독서' }
// 이중객체일 때 문제가 됨.

// 얕은복사만으로 해결하는방법

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
  hobby: {
    hobby1: "수영",
    hobby2: "독서",
  },
};
// const profile2 = {
//   name :profile.name,
//   age: profile.age,
//   school:profile.school,
//   hobby:{
//   hobby1: profile.hobby.hobby1,
//   hobby2: profile.hobby.hobby2
//   }
// }
// prettier ignore
const profile2 = { ...profile, hobby: { ...profile.hobby } };

// 깊은 복사로 해결하는방법
// 깊은복사 deep-copy -> 문자열로 변경하는것이다.
// 문자열을 없애는것임. 새로운 객체를생성하는것임.

const profile = {
  name: "철수",
  age: 12,
  school: "다람쥐초등학교",
  hobby: {
    hobby1: "수영",
    hobby2: "독서",
  },
};

// prettier ignore
const profile2 = JSON.parse(JSON.stringify(profile));

// 깊은복사가 얕은 복사보다 속도느림. (속도 빨리 해주는 기능 lodash에 있음)
// 플랫튼 flatten(array)
// cloneDeep => JSON.parse(JSON.stringify()) 빨리해주는 라이브러리임
