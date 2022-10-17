// 최댓값과 최솟값
// 문제 설명
// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.
// 예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.

// 제한 조건
// s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// 입출력 예
// s	return
// "1 2 3 4"	"1 4"
// "-1 -2 -3 -4"	"-4 -1"
// "-1 -1"	"-1 -1"

// [1]
function solution(s) {
    s += " ";
    let [min, max] = [0, 0];

    let str = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            str = Number(str);
            if (min === 0 || max === 0) {
                // 기준점 구하기 (가장 먼저 가져오는 숫자)
                [min, max] = [str, str];
            } else {
                // 두번째부터 가져오는 숫자
                min = str < min ? str : min;
                max = str > max ? str : max;
            }

            str = "";
            continue;
        }
        str += s[i];
    }
    return min + " " + max;
}

// [2]
function solution(s) {
    s = s.split(" ");
    const max = Math.max(...s);
    const min = Math.min(...s);
    // console.log(max, min)

    return `${min} ${max}`;
}

// 올바른 괄호
// 문제 설명
// 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

// "()()" 또는 "(())()" 는 올바른 괄호입니다.
// ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false

// // [1]  기본
// function solution(s){
//    // 첫 문자열이 닫혀있거나 마지막이 열려있다면 false리턴
//   if(s[0]===")" || s[s.length -1] === "(")  return false

//   let depth = 0

//   for(let str of s ){
//     // 열려있다면, 1을 더한다.
//     // console.log(str)
//     if(str === "(") depth++
//     else if( str === ")") depth--
//     // console.log(str, depth)

//     if (depth < 0 ) return false

//   }
//   return depth === 0

// 유효성검사에서 실패 함.

//   // let limit = s.length
//   // for(let i=0; i<limit; i++){
//   //  // console.log(s[i])
//   //   s = s.replace("()", "")

//   // }
//   // // console.log(s)
//   // return s === ""
// }
// solution("(())()")	//true
// solution(")()(")	//false

// [2] 메소드
function solution(s) {
    // 첫 문자열이 닫혀있거나 마지막이 열려있다면 false리턴
    if (s[0] === ")" || s[s.length - 1] === "(") return false;

    let fail = false;

    const answer = s.split("").reduce((acc, cur) => {
        console.log(acc, cur);
        if (acc < 0) {
            fail = true;
        }
        return acc + (cur === "(" ? 1 : -1);
    }, 0);

    return answer === 0 && fail === false;
}
solution("(())()"); //true
solution(")()("); //false
