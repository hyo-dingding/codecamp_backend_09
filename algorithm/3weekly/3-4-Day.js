// 없는 숫자 더하기
// 문제 설명
// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6

// [1] 내가 한방법
function solution(numbers) {
    let answer = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let add = 0;
    // console.log(numbers)
    for (let i = 0; i < answer.length; i++) {
        // console.log(numbers[i], i)
        // console.log(answer)
        if (!numbers.includes(answer[i])) {
            add += answer[i];
        }
    }

    return add;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); //14
solution([5, 8, 4, 0, 6, 7, 9]); //6

// [2]
function solution(numbers) {
    let answer = 0;
    // 아예 for 문을 저장하는구나
    for (let i = 1; i <= 9; i++) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); //14
solution([5, 8, 4, 0, 6, 7, 9]); //6

// [3] reduce
function solution(numbers) {
    let answer = new Array(9).fill(1).reduce((acc, cur, idx) => {
        let sum = cur + idx;

        // console.log(sum)
        return acc + (numbers.includes(sum) ? 0 : sum);
    }, 0);
    // console.log(answer)
    return answer;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]); //14
solution([5, 8, 4, 0, 6, 7, 9]); //6

// 두 정수 사이의 합
// 문제 설명
// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 제한 조건
// a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
// a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
// a와 b의 대소관계는 정해져있지 않습니다.
// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12
//[1]
function solution(a, b) {
    let answer = 0;
    if (a === b) {
        return a;
    } else {
        // 최소값 지정
        // 반복문이 실행될때 설정되는 초기값(a, b중 더작은 수가 들어간다.)
        // const start = a>b ? b: a
        // console.log(start)
        const start = Math.min(a, b);
        // console.log(start)
        // 최댓값
        // 반복문이 종료되는 조건을 설정( a,b 중 더큰 숫자가 들어감
        // const end  = a>b? a:b
        const end = Math.max(a, b);
        // console.log(end)
        for (let i = start; i <= end; i++) {
            // console.log(i)
            answer += i;
        }
    }
    return answer;
}

solution(3, 5); // 12
solution(3, 3); //3
solution(5, 3); //12

// 하샤드 수
// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false

// [1]
function solution(x) {
    let answer = 0;
    //재할당
    x = String(x);
    for (let i = 0; i < x.length; i++) {
        // console.log(x[i])
        answer += Number(x[i]);
    }
    // console.log( x%answer)
    return x % answer === 0;
}

solution(10); //true
solution(12); //true
solution(11); //false
solution(13); //false

// [2]
function solution(x) {
    let answer = x
        .toString()
        .split("")
        .reduce((acc, cur) => {
            return acc + Number(cur);
        }, 0);
    return x % answer === 0;
}

solution(10); //true
solution(12); //true
solution(11); //false
solution(13); //false
