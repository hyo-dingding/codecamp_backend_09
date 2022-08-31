// **018. 조건문 연습**

// **`문제 설명`**

// input1, input2에는 boolean 타입인 true, false가 입력됩니다.

// 둘 중에 하나라도 true라면 "true"

// 두 개 모두 false면 "false"라는 문구를 띄워주세요.

// **`입력 인자`**

// - input1 - boolean 타입인 true / false
// - input2 - boolean 타입인 true / false

// **`주의 사항`**

// - || (OR) 연산자 또는 &&(AND) 연산자를 이용해 보세요.

// **`예상 결과`**
// boolean(true, false) // "true"
// boolean(false, true) // "true"
// boolean(false, false) // "false"

function boolean(input1, input2) {
  if (!input1 && !input2) {
    return "false";
  } else {
    return "true";
  }
}

// **019. 홀짝**

// **`문제 설명`**

// 입력되는 숫자가 짝수인지 홀수인지 구별하는 함수를 만들려고 합니다.

// 입력된 값이 "짝수"이면 "Even", "홀수"이면 "Odd", 0이면 "Zero"라는 문구를 띄워주세요.

// **`입력 인자`**

// - num은 0 이상인 자연수

// **`주의 사항`**

// - if는 함수 안에서 사용됩니다.
// - console.log("Even")으로 입력하면 "Even"이라는 값이 출력됩니다.

// **`예상 결과`**
// evenOdd(12) // "Even"
// evenOdd(15) // "Odd"
// evenOdd(0)  // "Zero"

function evenOdd(num) {
  let answer = "";
  if (num === 0) return "Zero";
  if (num % 2 === 0) {
    answer = "Even";
  } else if (num % 2 === 1) {
    answer = "Odd";
  }
  return answer;
}

// **020. 온도**

// **`문제 설명`**

// 입력되는 온도에 따라 문구를 띄워주는 온도계 함수를 만들려고 합니다.

// 입력된 값에 따라 알맞은 문구를 띄워주세요

// 18이하면 "조금 춥네요"

// 19~23이면 "날씨가 좋네요"

// 24이상이면 "조금 덥습니다"

// **`입력 인자`**

// - num은 10~30까지의 자연수

// **`주의 사항`**

// - && 연산자가 필요합니다.

// **`예상 결과`**
// temperature(13)  // "조금 춥네요"
// temperature(23)  // "날씨가 좋네요"
// temperature(27)  // "조금 덥습니다"

function temperature(num) {
  let answer = "";
  if (num >= 24) {
    answer = "조금 덥습니다";
  } else if (num >= 19 && num <= 23) {
    answer = "날씨가 좋네요";
  } else if (num <= 18) {
    answer = "조금 춥네요";
  }
  return answer;
}

```jsx

function temperature(num){
	if() {

	}
}

```;

// 021. 며칠

// **`문제 설명`**

// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.

// **`입력 인자`**

// - month는 1~12의 숫자

// **`주의 사항`**

// - || 연산자가 필요합니다.
// - 2월은 28일로 계산합니다.

// **`예상 결과`**
// days(1) // 31
// days(2) // 28
// days(4) // 30

// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일
function days(month) {
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }
  if (month === 2) {
    return 28;
  }
}

const monthList = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};
function days(month) {
  return monthList[month];
}

// 조건문 (if / switch)
// switch case

const day = "목요일";
switch (day) {
  case "월요일":
    "월요일 입니다.";
    break;
  // 특정 case 찾았을때 탐색종료한다.
  // 데이가 월요일이라면 월요일입니다를 실행
  case "화요일":
    "화요일 입니다.";

    break;
  // 특징 : 모든 case 실행함. 케이스가 다르더라도 안쪽에 있는 데이터가 실행되는것
  case "수요일":
    "수요일 입니다.";
    break;

  // default: "다른요일입니다."  // 어떤한 case가 실행되지 않을때
  // 예외 처리 디폴트값
  default:
    day + "입니다.";

  //default사용하면 break 필요없어짐.
  // 항상마지막에 작성한다.
}
