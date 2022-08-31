// **003. 배열의 선언과 할당**

// **`문제 설명`**

// 주어진 변수 fruits에 "사과", "바나나", "파인애플"을 담아주세요.

// **`주의 사항`**

// - 빈 배열도 만들 수 있습니다.
// - 배열에 데이터를 담을 때 무엇으로 데이터를 구분할까요.

// **`예상 결과`**

// console.log(fruits) // ["사과", "바나나", "파인애플"]

let fruits = [];
fruits.push("사과", "바나나", "파인애플");
console.log(fruits);

// index로 접근하는것 지양하는것이 좋음.
let fruits = [];
fruits[0] = "사과";
fruits[1] = "바나나";
fruits[2] = "파인애플";
console.log(fruits);

// **004. 배열의 기능**

// **`문제 설명`**

// 주어진 fruits 배열에서 마지막 요소를 꺼내 newFruits에 넣어주세요.

// **`주의 사항`**

// - length를 이용해서 문제를 풀어야 합니다.
// - push를 이용해서 문제를 풀어야 합니다.
// - 마지막 요소를 꺼낼 때 length를 사용하는 이유는 무엇일까요.

// **`예상 결과`**
// console.log(newFruits) // ["파인애플"]

//[내가 쓴답]
let fruits = ["사과", "바나나", "파인애플"];
let newFruits = [];

newFruits.push(fruits[2]);

console.log(newFruits);

// 풀이!!
// 하드코딩말고 동적으로 받아와야함.
// 문제에서 length 값이 적어서 index값을 쉽게 알았으나 만약 배열의 길이가 길 경우
// 구하고 싶은 배열의 마지막 요소를 찾기 힘들 것이다. 그렇기 때문에 length 를 활용해야한다.

let fruits = ["사과", "바나나", "파인애플"];
let newFruits = [];
newFruits.push(fruits[fruits.length - 1]);

console.log(newFruits);

// 1. newFruits 배열안에 넣어줄것이기 때문에 선언해주기
// 알게된 사실!! [배열안에 숫자만 숫자만 넣을 수 있을것이라고 생각했다. length 값을 구하고싶어도
// 숫자만 나와서 원하는값을 찾지 못함.]
// .push( 를 통해 배열에 넣어 줄거고 거기서 fruits.length는 3이고 -1하면 2 그런데 []안에 넣어주면 파인애플이나옴.)
