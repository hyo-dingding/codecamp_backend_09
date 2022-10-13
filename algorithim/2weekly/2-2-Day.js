// 가운데 글자 가져오기
// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

// if문
function solution(s) {
  let center = Math.floor(s.length / 2);
  let answer = s[center];

  if (s.length % 2 === 0) {
    answer = s[center - 1] + answer;
  }
  return answer;
}

solution("abcde");
solution("qwer");

// 삼항연산자
function solution(s) {
  let center = Math.floor(s.length / 2);
  let answer = s.length % 2 !== 0 ? s[center] : s.slice(center - 1, center + 1);
  return answer;
}

// 서울에서 김서방 찾기
// 문제 설명
// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

function solution(seoul) {
  // let X = seoul.indexOf("Kim");
  // return `김서방은 ${X}에 있다`;
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      // break
      return `김서방은 ${i}에 있다`;
    }
  }
}
// Kim을 찾은 동시에 리턴

function solution(seoul) {
  let X = seoul.indexOf("Kim");
  return `김서방은 ${X}에 있다`;
}

// 문자열 다루기 기본
// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

// isNaN
function solution(s) {
  let answer = true;

  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  }
  for (let i = 0; i < s.length; i++) {
    // 숫자로 변화이 가능한지 확인하기
    if (isNaN(s[i]) === true) {
      answer = false;
    }
  }
  return answer;
}

// 리팩토링
function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  for (let i = 0; i < s.length; i++) {
    // 숫자로 변화이 가능한지 확인하기
    if (isNaN(s[i]) === true) {
      return false;
    }
  }
  return true;
}

// 약수의 합
// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

function solution(n) {
  let answer = n;
  // 약수 => 어떠한 수를 나누어  떨어지게 하는 수

  for (let i = 1; i <= n / 2; i++) {
    // console.log(n,i)
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}
