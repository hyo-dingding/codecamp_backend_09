/*
    거스름돈

    현금만을 사용하는 매점의 점원인 당신은
    현재 매장에 동전 밖에 남지 않은 것을 확인했습니다.
    손님들이 몰려오고 있고, 당신은 각각의 손님에게 최소 개수의 동전만을 사용해 거스름돈을 전달해야합니다.

    현재 가지고 있는 동전은 1원, 5원, 10원, 50원, 100원, 500원,
    이상 여섯개 종류가 있습니다.
    인자로 받는 change는 거슬러주어야 하는 액수입니다.
    최소 개수의 동전을 사용해 주어진 change와 같은 값을 만들고
    사용된 동전의 개수를 리턴해주세요.

    예를 들어 change가 4600원이라면,
    500원짜리 9개, 100원짜리 1개, 최소 10개로 완성되기 때문에
    숫자 10을 리턴합니다.

    - number 타입을 리턴해야합니다.
    - change는 1이상 100000 이하의 정수입니다. (1 <= change <= 100000)

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      makeChange(4350)

    case2:
      makeChange(2000)

    ------------------------------
    output
    ------------------------------

    case1:
      12

    case2:
      4
    
*/

function makeChange(change) {
    // 여기에서 작업하세요.
    let answer = 0;
    const money = [change + 1, 500, 100, 50, 10, 1];
    for (let i = 0; i < money.length - 1; i++) {
        // console.log(money[i])
        answer += Math.floor((change % money[i]) / money[i + 1]);
    }

    return answer;
}

/*
    누적 합산

    배열 nums가 주어집니다.
    해당 배열 nums는 숫자 타입 데이터만을 요소로 가집니다.
    각 요소를 누적 합산한 결과들을 배열에 담아 리턴해 주세요.
    리턴되는 배열 answer의 형태는 아래와 같습니다.
    answer[i] = (nums[0] + ... + nums[i])

    예를 들어 아래와 같은 nums 배열이 주어진 경우,
    [1, 2, 3, 4, 5]

    기대되는 결과값은
    [1, 3, 6, 10, 15]
    입니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      runningSum([ 1, 2, 3, 4, 5 ])

    case2:
      runningSum([ 0, 0, 0, 1, 0 ])

    ------------------------------
    output
    ------------------------------

    case1:
      [ 1, 3, 6, 10, 15 ]

    case2:
      [ 0, 0, 0, 1, 1 ]

*/

function runningSum(nums) {
    // 여기에서 작업하세요.
    let answer = [];
    nums.reduce((acc, cur, i) => {
        // console.log(acc, cur,i)
        // answer.push(acc = cur+i)
        answer.push((acc += cur));
        return acc;
    }, 0);
    return answer;
}

/*
    세 수 정렬
    
    숫자 세 개가 담겨있는 배열 arr이 주어졌을 때, 
    가장 작은 수, 그 다음 수, 가장 큰 수로 오름차순 정렬한 배열을 리턴하세요.
    단) 배열에 담긴 숫자는 1보다 크거나 같고, 1,000,000보다 작거나 같다. 이 숫자는 모두 다르다.

    - (1 <= arr[i] <= 1,000,000)
    - arr의 요소 중 중복 요소는 존재하지 않습니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    case1:
      sortNum([ 2, 3, 1 ])

    case2:
      sortNum([ 400, 501, 23, 76 ])

    ------------------------------
    output
    ------------------------------

    case1:
      [ 1, 2, 3 ]

    case2:
      [ 23, 76, 400, 501 ]
*/

function sortNum(arr) {
    // 여기에서 작업하세요.
    let answer = arr.sort((a, b) => a - b);
    return answer;
}
/*
    직각삼각형

    함수 triangle에 세변의 길이(a, b, c)가 주어집니다. 
    a의 제곱 + b의 제곱이 c의 제곱이면 직각 삼각형입니다. 

    삼각형이 직각삼각형이라면 "right", 아니라면 "wrong"을 리턴하세요.

*/

function triangle(a, b, c) {
    // 여기에서 작업하세요.

    let A = a * a;
    let B = b * b;
    let C = c * c;
    if (A + B !== C) {
        return "wrong";
    } else {
        return "right";
    }
}
