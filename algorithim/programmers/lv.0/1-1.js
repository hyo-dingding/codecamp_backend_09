// 배열의 유사도
// 문제 설명
// 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ s1, s2의 길이 ≤ 100
// 1 ≤ s1, s2의 원소의 길이 ≤ 10
// s1과 s2의 원소는 알파벳 소문자로만 이루어져 있습니다
// s1과 s2는 각각 중복된 원소를 갖지 않습니다.
// 입출력 예
// s1	s2	result
// ["a", "b", "c"]	["com", "b", "d", "p", "c"]	2
// ["n", "omg"]	["m", "dot"]	0

function solution(s1, s2) {
    let a = [];
    let answer = 0;
    for (let i = 0; i < s1.length; i++) {
        a.push(s1[i]);
    }

    for (let j = 0; j < s2.length; j++) {
        if (a.includes(s2[j]) === true) {
            answer++;
        }
    }
    return answer;
}

// 순서쌍의 개수
// 문제 설명
// 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 20	6
// 100	9

function solution(n) {
    let a = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            a.push(i);
        }
    }

    return a.length;
}

// 제곱수 판별하기
// 문제 설명
// 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 144	1
// 976	2

function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}
