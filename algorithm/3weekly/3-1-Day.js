// 문자열 내 p와 y의 개수
// 문제 설명
// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false

// [1]
function solution(s) {
  // console.log(s)
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] === "p" || s[i] === "P") {
      p++;
    } else if (s[i] === "y" || s[i] === "Y") {
      y++;
    }
  }

  return p === y;
}

solution("pPoooyY"); //true
solution("Pyy");

// 리팩토링
function solution(s) {
  // console.log(s)
  s = s.toLowerCase();
  const obj = { p: 0, y: 0 };

  s.split("").forEach((str) => {
    obj[str] === undefined ? (obj[str] = 1) : obj[str]++;
  });

  return obj.p === obj.y;
}

solution("pPoooyY");

// 이상한 문자 만들기
// 문제 설명
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// 제한 사항
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
// 입출력 예
// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// [1]
function solution(s) {
  let answer = "";
  let idx = 0;
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i], i)
    // console.log(s[i], i,idx)
    if (s[i] === " ") {
      answer += " ";
      idx = 0;
    } else {
      answer +=
        idx % 2 === 0
          ? // 짝수 인덱스라면 대문자 추가: 소문자추가
            s[i].toUpperCase()
          : s[i].toLowerCase();
      idx++;
      // console.log(s[i])
    }
  }
  return answer;
}

solution("try hello world"); //	"TrY HeLlO WoRlD"

// [2]
function solution(s) {
  const answer = s
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((letter, i) => {
          // console.log(letter, i)
          return i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  // console.log(answer)
  return answer;
}

solution("try hello world"); //	"TrY HeLlO WoRlD"

// 자연수 뒤집어 배열로 만들기
// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

// [1]
function solution(n) {
  const answer = [];
  n = String(n);
  // console.log(typeof n)
  for (let i = n.length - 1; i >= 0; i--) {
    console.log(n[i]);
    answer.push(Number(n[i]));
  }
  return answer;
}
solution(12345);

// [2]
function solution(n) {
  const answer = String(n)
    .split("")
    .reverse()
    .map((num) => {
      return Number(num);
    });
  // console.log(answer)

  return answer;
}
solution(12345);

// 나누어 떨어지는 숫자 배열
// 문제 설명
// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]

// [1]
function solution(arr, divisor) {
  const answer = arr.filter((num) => {
    return num % divisor === 0;
  });
  // console.log(answer)
  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}
solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);

// [2]
function solution(arr, divisor) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], arr[i]%divisor)
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }

  // console.log(answer)
  return answer.length === 0
    ? [-1]
    : answer.sort((a, b) => {
        a - b;
      });
}
solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
