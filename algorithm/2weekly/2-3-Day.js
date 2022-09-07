// 자릿수 더하기
// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.
// for문
function solution(n) {
  // console.log(n)
  let answer = 0;
  n = String(n);
  // console.log(n[0])
  for (let i = 0; i < n.length; i++) {
    // console.log(n[i]);
    answer += Number(n[i]);
  }
  return answer;
}

// reduce사용
function solution(n) {
  // reduce 배열에만 사용가능 문자열로 변환해서 사용해야함.
  const answer = String(n)
    .split("")
    .reduce((acc, cur) => {
      // console.log(acc, cur)
      return acc + Number(cur);
    }, 0);
  return answer;
}

solution(123);
solution(987);

//   x만큼 간격이 있는 n개의 숫자
// 문제 설명
// 함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 -10000000 이상, 10000000 이하인 정수입니다.
// n은 1000 이하인 자연수입니다.
// 입출력 예
// x	n	answer
// 2	5	[2,4,6,8,10]
// 4	3	[4,8,12]
// -4	2	[-4, -8]

function solution(x, n) {
  // console.log(x, n)
  const answer = [];
  for (let i = 1; i <= n; i++) {
    // console.log(i, x)
    answer.push(i * x);
  }
  return answer;
}
// map
function solution(x, n) {
  const answer = new Array(n).fill(1).map((num, idx) => {
    return (idx + 1) * x;
  });
  return answer;
}

solution(2, 5);
solution(4, 3);
solution(-4, 2);

// 문자열 내림차순으로 배치하기
// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"

// sort 앞자리 수만 비교함.
function solution(s) {
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    // console.log(s[i])
    arr.push(s[i]);
  }
  arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  let answer = "";
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
    // console.log(answer)
  }
  return answer;
}

solution("Zbcdefg");

function solution(s) {
  let arr = s.split("");
  // console.log(arr)
  arr.sort((a, b) => {
    return a > b ? -1 : 1;
  });
  // console.log(arr)
  let answer = arr.join("");
  // console.log(answer)
  return answer;
}

solution("Zbcdefg");

// K번째수
// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]

function solution(array, commands) {
  let answer = [];
  for (let idx = 0; idx < commands.length; idx++) {
    let i = commands[idx][0];
    let j = commands[idx][1];
    let k = commands[idx][2];
    console.log(i, j, k);
    const result = array.slice(i - 1, j);
    console.log(result);
    result.sort((a, b) => {
      return a - b;
    });
    answer.push(result[k - 1]);
  }
  console.log(answer);
}

function solution(array, commands) {
  const answer = commands.map((el) => {
    const result = array.slice(el[0] - 1, el[1]);
    // console.log(result)
    result.sort((a, b) => {
      return a - b;
    });
    return result[el[2] - 1];
  });
  return answer;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
