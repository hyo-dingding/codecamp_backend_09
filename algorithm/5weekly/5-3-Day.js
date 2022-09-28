// 시저 암호
// 문제 설명
// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

// 제한 조건
// 공백은 아무리 밀어도 공백입니다.
// s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
// s의 길이는 8000이하입니다.
// n은 1 이상, 25이하인 자연수입니다.
// 입출력 예
// s	n	result
// "AB"	1	"BC"
// "z"	1	"a"
// "a B z"	4	"e F d"

/// [1]
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        // console.log(s[i])
        if (s[i] === " ") {
            answer += s[i]; // ' '
        } else {
            let idx = alphabet.indexOf(s[i]);
            // console.log(s[i],idx)
            const word = idx > 25 ? alphabet.slice(26) : alphabet.slice(0, 26);
            // console.log(alphabet.slice(26) alphabet.slice(0,26))
            // console.log(s[i], word, idx)
            idx = word.indexOf(s[i]) + n;
            if (idx >= 26) {
                idx -= 26;
            }
            // console.log(s[i], idx, word, word[idx])
            answer += word[idx];
        }
    }
    return answer;
}

solution("AB", 1); //"BC"
solution("z", 1); //	"a"
solution("a B z", 4); //"e F d"

/// [2]

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
    let answer = "";

    for (let i = 0; i < s.length; i++) {
        // console.log(s[i])
        if (s[i] === " ") {
            answer += s[i]; // ' '
        } else {
            const word = lower.includes(s[i]) ? lower : upper;

            // console.log(s[i],word)
            let idx = word.indexOf(s[i]) + n;

            if (idx >= 26) {
                idx -= 26;
            }
            // console.log(s[i], idx, word, word[idx])
            answer += word[idx];
        }
    }
    return answer;
}

solution("AB", 1); //"BC"
solution("z", 1); //	"a"
solution("a B z", 4); //"e F d"

// /// [3]

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
    let answer = s.split("").reduce((acc, cur) => {
        // console.log(acc, cur)
        const word = lower.includes(cur) ? lower : upper;
        let idx = word.indexOf(cur) + n;
        // console.log(cur, idx, word)
        if (idx > 26) idx -= 26;
        // console.log(cur, idx, word)
        return acc + (cur === " " ? " " : word[idx]);
    }, "");

    return answer;
}

solution("AB", 1); //"BC"
solution("z", 1); //	"a"
solution("a B z", 4); //"e F d"

/// [4] 아스키 코드 사용

function solution(s, n) {
    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            answer += s[i];
        } else {
            // charCodeAt : 주어진 문자의 유니코드 데이터(숫자)를 반환
            // String.fromCarCode : 유니코드 데이터(숫자)를 문자로 반환

            // console.log(s[i], s[i].charCodeAt())
            let idx = s[i].charCodeAt() + n;
            // console.log(s[i], String.fromCharCode(idx))
            if (idx > 122 || (idx > 90 && idx - n < 97)) {
                idx -= 26;
            }
            // console.log(idx, String.fromCharCode(idx))
            answer += String.fromCharCode(idx);
        }
    }
    // console.log(answer)
    return answer;
}

solution("AB", 1); //"BC"
solution("z", 1); //	"a"
solution("a B z", 4); //"e F d"
