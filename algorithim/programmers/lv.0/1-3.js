// 옷가게 할인 받기
// 문제 설명
// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 10 ≤ price ≤ 1,000,000
// price는 10원 단위로(1의 자리가 0) 주어집니다.
// 소수점 이하를 버린 정수를 return합니다.
// 입출력 예
// price	result
// 150,000	142,500
// 580,000	464,000

function solution(price) {
    let answer = 0;
    if (100000 <= price && 300000 > price) {
        return Math.floor(price * 0.95);
    }
    if (300000 <= price && 500000 > price) {
        return Math.floor(price * 0.9);
    }
    if (500000 <= price) {
        return Math.floor(price * 0.8);
    }
    return price;
}

solution(150000); //142,500
solution(580000); //464,000

// 세균 증식
// 문제 설명
// 어떤 세균은 1시간에 두배만큼 증식한다고 합니다. 처음 세균의 마리수 n과 경과한 시간 t가 매개변수로 주어질 때 t시간 후 세균의 수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 10
// 1 ≤ t ≤ 15
// 입출력 예
// n	t	result
// 2	10	2048
// 7	15	229,376

// [1]
function solution(n, t) {
    for (let i = 1; i <= t; i++) {
        n *= 2;
    }
    return n;
}

solution(2, 10); //	2048
solution(7, 15); //229,376

// [2]
function solution(n, t) {
    return n * Math.pow(2, t);
}

solution(2, 10); //	2048
solution(7, 15); //229,376
