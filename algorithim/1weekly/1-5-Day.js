// **027. 가장 큰 수 찾기**

// **`문제 설명`**

// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.

// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

// **`입력 인자`**

// - str은 문자열입니다.

// **`주의 사항`**

// - str에서 각각의 문자를 숫자로 바꿔서 계산해야 합니다.
// - 비교할 수 있는 기준값이 있어야 합니다.
// - 최댓값을 저장할 수 있는 변수가 있어야 합니다.

// **`예상 결과`**
// bigNum("12345") // 5
// bigNum("87135") // 8

// [1방법]
function bigNum(str) {
  let biggest = Number(str[0]);
  for (let i = 1; i < str.length; i++) {
    // console.log(str[i])
    if (biggest < Number(str[i])) {
      biggest = Number(str[i]);
    }
    // console.log(biggest)
  }

  return biggest;
}
// Number 숫자로 변환이 가능한 데이터만 들어옴

// [2방법]
function bigNum(str) {
  let arr = str.split("");
  // console.log(arr)
  // console.log(Math.max(...str))
  return Math.max(...str);
}

// 41**. 조건문 실전 적용 - 점수에 따른 등급**

// **`문제 설명`**

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2a7c4e64-7fed-4057-af3a-6c85b2e006f2/_2021-04-21__3.46.01.png)

// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.

// **`입력 인자`**

// - score - 숫자열

// **`예상 결과`**
// grade(105)  // "잘못된 점수입니다"
// grade(-10)  // "잘못된 점수입니다"
// grade(97)   // "A"
// grade(86)   // "B"
// grade(75)   // "C"
// grade(66)   // "D"
// grade(52)   // "F"

function grade(score) {
  if (score < 0 || score > 100) {
    return "잘못된 점수 입니다.";
  }
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// **043. 마이페이지**

// **`문제 설명`**

// ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5a8ffd8-31ed-4d91-ab5e-67df2c64f257/_2021-04-21__3.34.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f5a8ffd8-31ed-4d91-ab5e-67df2c64f257/_2021-04-21__3.34.42.png)

// 오른쪽 myShooping은 내가 구매한 목록을 보여주고 있습니다.

// 해당 목록에서 "의류"를 구매한 횟수와 총 금액을 나타내고,

// "의류"를 구매한 횟수에 따라 등급을 나타내세요.

// 등급표
// "0~2"  ⇒ Bronze

// "3~4" ⇒ Silver

// 5이상 ⇒ Gold

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 반복문을 통해 문제를 풀어야 합니다.
// - myShopping 내용을 직접 수정하면 안 됩니다.
// - 예상 결과에 나온 문구와 형식이 같아야 합니다.

// **`예상 결과`**
// 의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.
const myShopping = [
  { category: "과일", price: 12000 },
  { category: "의류", price: 10000 },
  { category: "의류", price: 20000 },
  { category: "장난감", price: 9000 },
  { category: "과일", price: 5000 },
  { category: "의류", price: 10000 },
  { category: "과일", price: 8000 },
  { category: "의류", price: 7000 },
  { category: "장난감", price: 5000 },
  { category: "의류", price: 10000 },
];
function grade(list) {
  let count = 0; // 의류구매 횟수
  let amount = 0; // 사용금액
  let gr = "";
  for (let i = 0; i < list.length; i++) {
    // console.log(list[i])
    if (list[i].category === "의류") {
      count++;
      amount += list[i].price;
    }
  }
  if (count >= 5) {
    gr = "Gild";
  } else if (count >= 3) {
    gr = "Silver";
  } else {
    gr = "Bronze";
  }
  // console.log(count,amount)
  return `의류를 구매한 횟수는 총 ${count}회 금액은 ${amount}원이며 등급은 ${gr}입니다.`;
}

grade(myShopping);

// 문자열을 정수로 바꾸기
// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
function solution(s) {
  console.log(typeof s);
  return Number(s);
  //   return +s // 이것도 가능하나 잘 사용하지 않음
}
