// **023. 숫자 더하기**

// **`문제 설명`**

// 입력되는 수에 따라 0부터 해당 수까지의 합을 구하려고 합니다.

// num은 1이상의 자연수가 들어옵니다.

// 만약 num이 5라면 1 + 2 + 3 + 4 + 5를 모두 더한 값을 출력시켜주세요.

// **`입력 인자`**

// - num은 1이상의 자연수 입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.

// =

// **`예상 결과`**
// sum(5) // 15
// sum(3) // 6

function sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    // console.log(num, i)
    // count = count + i;
    count += i;
  }
  return count;
}

// **024. 특정 문자열 세기**

// **`문제 설명`**

// 문자열에서 "a"가 몇 번 등장하는지 횟수를 구하는 함수를 만들려고 합니다.

// 반복문을 이용해 "a"의 등장 횟수를 변수 "count"에 할당하세요.

// **`입력 인자`**

// - str은 문자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.
// - 문자열도 배열입니다.
// - 대문자 "A" 문자열도 "a" 에 포함입니다.

// **`예상 결과`**
// countLetter("I am from Korea")                         // 2
// countLetter("A day without laughter is a day wasted.") // 6
function countLetter(str) {
  let count = 0;
  let answer = "";
  // console.log(str.toLowerCase())
  answer = str.toLowerCase();
  // console.log(answer.includes("a"))
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].includes("a")) {
      count++;
    }
  }
  return count;
}

// **025. 문자열 삽입**

// **`문제 설명`**

// num을 입력받아 1부터 num의 값까지 각각의 숫자 사이에 "-"이 들어간 문자열을 만들어야 합니다.

// num이 3일 경우에는 "1-2-3"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.

// **`예상 결과`**
// makeNumber(5) // 1-2-3-4-5
// makeNumber(7) // 1-2-3-4-5-6-7
function makeNumber(num) {
  let answer = "";
  // let result = 0
  for (let i = 1; i <= num; i++) {
    // console.log(num, i)
    answer = answer + i;
    if (i !== num) {
      answer = answer + "-";
    }
  }
  return answer;
}

// **026. 홀수 문자열**

// **`문제 설명`**

// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.

// num이 5일 경우에는 "135"입니다.

// **`입력 인자`**

// - num은 숫자열입니다.

// **`주의 사항`**

// - for을 이용해서 문제를 풀어야 합니다.
// - 짝수를 제외하는 조건을 추가해야 합니다.

// **`예상 결과`**
// makeOdd(5) // "135"
// makeOdd(7) // "1357"
function makeOdd(num) {
  let answer = "";
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 1) {
      answer += i;
    }
  }
  return answer;
}
