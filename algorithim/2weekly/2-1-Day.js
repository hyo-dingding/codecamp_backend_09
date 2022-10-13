// 같은 숫자는 싫어
// 문제 설명
// 배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다.
// 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다.
// 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

// arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
// arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
// 배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 배열 arr의 크기 : 1,000,000 이하의 자연수
// 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    // if (arr[i] !== answer[answer.length-1] )
    if (arr[i] !== arr[i - 1]) {
      // console.log(arr[i-1])
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 핸드폰 번호 가리기
// 문제 설명
// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

// for문
function solution(phone_number) {
  let answer = "";
  for (let i = 0; i < phone_number.length; i++) {
    // console.log(phone_number[i])
    if (i < phone_number.length - 4) {
      // console.log(phone_number[i])
      // 뒷 4자리를 제외한 앞에 번호들을 *처리
      answer += "*";
    } else {
      answer += phone_number[i];
    }
  }
  return answer;
}

//메서드 방식
function solution(phone_number) {
  let answer = "";
  answer += answer.padStart(phone_number.length - 4, "*"); //길이값
  answer += phone_number.slice(phone_number.length - 4); //인덱스값
  return answer;
  //console.log(answer)
}

// 짝수와 홀수
// 문제 설명
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

// 1 삼항연산자
function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 2 if문
function solution(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// 평균 구하기
// 문제 설명
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 제한사항
// arr은 길이 1 이상, 100 이하인 배열입니다.
// arr의 원소는 -10,000 이상 10,000 이하인 정수입니다.
// 입출력 예
// arr	return
// [1,2,3,4]	2.5
// [5,5]	5

// 평균구하기
function solution(arr) {
  // 평균구하기 90+40+80+60 /4
  let sum = 0;
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    sum += arr[i];
  }
  // console.log(sum)
  answer = sum / arr.length;
  return answer;
}

// 메소드 사용
function solution(arr) {
  // reduce 배열에만 사용가능
  // 콜백함수를 인자로 받음
  //acc(accumulator) 누산기 :  cur
  let sum = 0;
  sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  return sum / arr.length;
}
