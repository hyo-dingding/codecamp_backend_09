// 정수 제곱근 판별
// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

//제곱근
// 제곱의 기준이 되는 숫자
// 2 * 2 === 4 (2는 4의 제곱근)
// i * i === n 같은경우 i는 n의 제곱근인것임.
function solution(n) {
    let answer = -1;
    for (let i = 1; i * i <= n; i++) {
        // 11 *11 ===121
        // console.log(i, i*i, n)
        if (i * i === n) {
            // console.log(i)
            // 제곱근을 찾은경우
            answer = i + 1;
            return answer * answer;
            //  return (i+1)*(i+1) 가능
            //거듭제곱 연산자 :()** 몇제곱을 할것인지
            // return  (i+1)**2
        }
    }
    // 제곱근을 찾지 못한경우
    return answer;
}

solution(121);
solution(3);
