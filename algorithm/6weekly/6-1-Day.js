// 예산
// 문제 설명
// S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했습니다. 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없습니다. 그래서 최대한 많은 부서의 물품을 구매해 줄 수 있도록 하려고 합니다.

// 물품을 구매해 줄 때는 각 부서가 신청한 금액만큼을 모두 지원해 줘야 합니다. 예를 들어 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없습니다.

// 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// d는 부서별로 신청한 금액이 들어있는 배열이며, 길이(전체 부서의 개수)는 1 이상 100 이하입니다.
// d의 각 원소는 부서별로 신청한 금액을 나타내며, 부서별 신청 금액은 1 이상 100,000 이하의 자연수입니다.
// budget은 예산을 나타내며, 1 이상 10,000,000 이하의 자연수입니다.
// 입출력 예
// d	budget	result
// [1,3,2,5,4]	9	3
// [2,2,3,3]	10	4
// 입출력 예 설명
// 입출력 예 #1
// 각 부서에서 [1원, 3원, 2원, 5원, 4원]만큼의 금액을 신청했습니다. 만약에, 1원, 2원, 4원을 신청한 부서의 물품을 구매해주면 예산 9원에서 7원이 소비되어 2원이 남습니다. 항상 정확히 신청한 금액만큼 지원해 줘야 하므로 남은 2원으로 나머지 부서를 지원해 주지 않습니다. 위 방법 외에 3개 부서를 지원해 줄 방법들은 다음과 같습니다.

// 1원, 2원, 3원을 신청한 부서의 물품을 구매해주려면 6원이 필요합니다.
// 1원, 2원, 5원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
// 1원, 3원, 4원을 신청한 부서의 물품을 구매해주려면 8원이 필요합니다.
// 1원, 3원, 5원을 신청한 부서의 물품을 구매해주려면 9원이 필요합니다.
// 3개 부서보다 더 많은 부서의 물품을 구매해 줄 수는 없으므로 최대 3개 부서의 물품을 구매해 줄 수 있습니다.

function solution(d, budget) {
    d.sort((a, b) => a - b);

    let answer = 0;
    for (let i = 0; i < d.length; i++) {
        console.log(d[i]);
        if (d[i] > budget) {
            break;
        } else {
            // budget = budget - d[i]
            budget -= d[i];
            answer++;
        }
    }
    return answer;
}

solution([1, 3, 2, 5, 4], 9); //3
solution([2, 2, 3, 3], 10); //4
// [1]
function solution(d, budget) {
    d.sort((a, b) => a - b);
    // console.log(d)
    let answer = 0; // 지원 가능한 부서의 수
    let sum = 0; // 각부서가 신청한 금액의 합
    for (let i = 0; i < d.length; i++) {
        // console.log(d[i])
        sum += d[i];
        if (sum <= budget) {
            answer++;
        }
        // console.log(sum, answer)
    }
    return answer;
}

solution([1, 3, 2, 5, 4], 9); //3
solution([2, 2, 3, 3], 10); //4

// [2]
function solution(d, budget) {
    d.sort((a, b) => a - b);
    // console.log(d)
    let answer = 0; // 지원 가능한 부서의 수

    while (budget - d[answer] >= 0) {
        budget -= d[answer];
        answer++;
    }

    return answer;
}

solution([1, 3, 2, 5, 4], 9); //3
solution([2, 2, 3, 3], 10); //4

// [3]
function solution(d, budget) {
    const answer = d
        .sort((a, b) => a - b)
        .filter((money) => {
            // 총 예산에서 지원금액 차감
            budget -= money;
            // console.log(budget, money)
            return budget >= 0;
        });

    return answer.length;
}

solution([1, 3, 2, 5, 4], 9); //3
solution([2, 2, 3, 3], 10); //4

// 피보나치 수
// 문제 설명
// 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

// 예를들어

// F(2) = F(0) + F(1) = 0 + 1 = 1
// F(3) = F(1) + F(2) = 1 + 1 = 2
// F(4) = F(2) + F(3) = 1 + 2 = 3
// F(5) = F(3) + F(4) = 2 + 3 = 5
// 와 같이 이어집니다.

// 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

// 제한 사항
// n은 2 이상 100,000 이하인 자연수입니다.
// 입출력 예
// n	return
// 3	2
// 5	5
// 입출력 예 설명
// 피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
// 0,1,1,2,3,5,8,13,21,,,,
// f(3):f(2)+f(1)
// f(2):f(1)+f(0)

// // [1]
function solution(n) {
    const answer = [];
    let prev = 0; // 피보나치의 0번째 숫자를 의미
    let next = 1; // 피보나치의 1번째 숫자를 의미
    let sum = 1; // 피보나치의 0번째 숫자를 의미
    for (let i = 2; i <= n; i++) {
        sum = (prev + next) % 1234567;
        prev = next;
        next = sum;
        answer.push(sum);
        // console.log(sum)
    }
    return answer[n - 2];
}

solution(3); //	2
solution(5); //5

// [2]
function solution(n) {
    let prev = 0; // 피보나치의 0번째 숫자를 의미
    let next = 1; // 피보나치의 1번째 숫자를 의미
    let sum = 1; // 피보나치의 0번째 숫자를 의미

    const answer = new Array(n - 1).fill(1).reduce((acc) => {
        // console.log(acc)
        sum = (prev + acc) % 1234567;
        prev = acc;
        return sum;
    }, sum);

    return answer;
}

solution(3); //	2
solution(5); //5
