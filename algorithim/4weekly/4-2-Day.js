// 음양 더하기
// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0

function solution(absolutes, signs) {
    // console.log(absolutes)
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        console.log(absolutes[i], signs[i]);
        if (!signs[i]) {
            absolutes[i] = -absolutes[i];
        }
        answer += absolutes[i];
    }

    return answer;
}

solution([4, 7, 12], [true, false, true]); //	9
solution([1, 2, 3], [false, false, true]); // 0
// [2]
function solution(absolutes, signs) {
    // console.log(absolutes)
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        // console.log(absolutes[i], signs[i]);

        answer += signs[i] ? absolutes[i] : -absolutes[i];
    }

    return answer;
}

solution([4, 7, 12], [true, false, true]); //	9
solution([1, 2, 3], [false, false, true]); // 0

// [3]
function solution(absolutes, signs) {
    // console.log(absolutes)
    let answer = absolutes.reduce((acc, cur, i) => {
        // console.log(acc, cur)
        return (
            acc +
            (signs[i]
                ? cur // true일경우 양수
                : -cur) // false일경우
        );
    }, 0);

    return answer;
}

solution([4, 7, 12], [true, false, true]); //	9
solution([1, 2, 3], [false, false, true]); // 0

// JadenCase 문자열 만들기
// 문제 설명
// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. (첫 번째 입출력 예 참고)
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 1 이상 200 이하인 문자열입니다.
// s는 알파벳과 숫자, 공백문자(" ")로 이루어져 있습니다.
// 숫자는 단어의 첫 문자로만 나옵니다.
// 숫자로만 이루어진 단어는 없습니다.
// 공백문자가 연속해서 나올 수 있습니다.
// 입출력 예
// s	return
// "3people unFollowed me"	"3people Unfollowed Me"
// "for the last week"	"For The Last Week"

//[1]

function solution(s) {
    let answer = "";
    s = s.toLowerCase();
    // console.log(s)
    let idx = 0;

    for (let i = 0; i < s.length; i++) {
        let word = s[i];
        if (s[i] === " ") {
            idx = 0;
        } else {
            if (idx === 0) {
                // console.log(s[i], i)
                word = s[i].toUpperCase();
            }
            idx++;
        }
        answer += word;
    }
    return answer;
}

solution("3people unFollowed me"); //"3people Unfollowed Me"
solution("for the last week"); //"For The Last Week"
