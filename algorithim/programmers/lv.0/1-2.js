// 모음 제거
// 문제 설명
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// my_string은 소문자와 공백으로 이루어져 있습니다.
// 1 ≤ my_string의 길이 ≤ 1,000
// 입출력 예
// my_string	result
// "bus"	"bs"
// "nice to meet you"	"nc t mt y"

function solution(my_string) {
    const mo = ["a", "e", "i", "o", "u"];
    let a = my_string.split("");
    let answer = "";

    for (let i = 0; i < a.length; i++) {
        if (!mo.includes(a[i])) {
            answer += a[i];
        }
    }
    return answer;
}

solution("bus"); // "bs"
solution("nice to meet you"); // "nc t mt y"

// 숨어있는 숫자의 덧셈 (1)
// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 소문자, 대문자 그리고 한자리 자연수로만 구성되어있습니다.
// 입출력 예
// my_string	result
// "aAb1B2cC34oOp"	10
// "1a2b3c4d123"	16

// [1]

function solution(my_string) {
    let a = my_string.split("");
    // console.log(a)
    let b = [];
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        if (Number(a[i])) {
            b.push(a[i]);
        }
    }
    for (let i = 0; i < b.length; i++) {
        answer += Number(b[i]);
        // console.log(answer)
    }
    return answer;
}
solution("aAb1B2cC34oOp"); // 10
solution("1a2b3c4d123"); // "16

// [2]

function solution(my_string) {
    let a = [...my_string];
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (isNaN(Number(a[i])) === false) {
            count += Number(a[i]);
            // console.log(count)
        }
    }
    return count;
}

solution("aAb1B2cC34oOp"); // 10
solution("1a2b3c4d123"); // "16

// 문자열 정렬하기 (1)
// 문제 설명
// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// my_string에는 숫자가 한 개 이상 포함되어 있습니다.
// my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -
// 입출력 예
// my_string	result
// "hi12392"	[1, 2, 2, 3, 9]
// "p2o4i8gj2"	[2, 2, 4, 8]
// "abcde0"	[0]

function solution(my_string) {
    let a = [...my_string];
    // console.log(a)
    let answer = [];
    for (let i = 0; i < a.length; i++) {
        if (!isNaN(Number(a[i]))) {
            answer.push(Number(a[i]));
        }
    }
    return answer.sort((a, b) => a - b);
}

solution("hi12392"); //[1, 2, 2, 3, 9]
solution("p2o4i8gj2"); //[2, 2, 4, 8]
solution("abcde0"); //[0]
