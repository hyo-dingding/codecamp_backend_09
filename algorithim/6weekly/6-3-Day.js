// 3진법 뒤집기
// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.
// 입출력 예
// n	result
// 45	7
// 125	229

//[1]

function solution(n) {
    // 1. 3진법으로 변환
    n = n.toString(3);
    // console.log(n)

    // 2. 앞뒤 반전(뒤집기)
    let reverse = "";
    // 마지막 문자가 맨앞으로 이동하는것
    for (let i = n.length - 1; i >= 0; i--) {
        // console.log(n[i], i)
        reverse += n[i];
    }
    // console.log(reverse)
    return parseInt(reverse, 3);
}

solution(45); //7
// solution(125)	//229

//  "123"
//   String(123)
//   let a = 123
//   // parseInt: 해당 진법으로 변환
// a = a.toString(3)
// // parseInt:  n진법으로 표현된 숫자를 10진법으로 변환

// parseInt(a,3) // 주어진 문자를 숫자로 변환함 (문자, 몇진법인지 말하면 10진법으로 변환됨)

//[2]
function solution(n) {
    n = n.toString(3).split("").reverse().join("");

    return parseInt(n, 3);
}

solution(45); //7
solution(125); //229

// 이진 변환 반복하기
// 문제 설명
// 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

// x의 모든 0을 제거합니다.
// x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
// 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

// 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// s의 길이는 1 이상 150,000 이하입니다.
// s에는 '1'이 최소 하나 이상 포함되어 있습니다.
// 입출력 예
// s	result
// "110010101001"	[3,8]
// "01110"	[3,3]
// "1111111"	[4,1]

// [1]

function solution(s) {
    let count = 0; // 변환횟수
    let remove = 0; // 제거된 0의 개수
    while (s !== "1") {
        count++;
        // 1. 0제거
        // s문자열요소 체크
        let temp = "";

        for (let i = 0; i < s.length; i++) {
            // console.log( s[i],temp, remove)
            if (s[i] === "0") {
                // 침조해온 요소가 0인 경우를 찾는다
                remove++;
                continue;
            }
            // console.log(temp)
            temp += s[i]; // 문자열 '1'만 들어온다
        }
        s = temp.length; // 결과가 문자여 1이 아니라면 다시 반복
        s = s.toString(2); // 결과가 문자열 '1'이라면 반복문 종료
        // console.log(s)
    }

    return [count, remove];
}

solution("110010101001"); //[3,8]
solution("01110"); //[3,3]
solution("1111111"); //[4,1]

// [2]

function solution(s) {
    let [count, remove] = [0, 0];

    function recursion(s) {
        if (s === "1") {
            return [count, remove];
        }

        remove += s.split("").filter((el) => el === "0").length;
        s = s.split("").filter((el) => el !== "0").length;
        count++;

        return recursion(s.toString(2));
    }
    return recursion(s);
}

solution("110010101001"); //[3,8]
solution("01110"); //[3,3]
solution("1111111"); //[4,1]
