// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2
// 입출력 예 설명
// 입출력 예 #1

// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2

// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

//[1]
function solution(a, b) {
    let answer = 0;
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i], b[i])
        answer = answer + a[i] * b[i];
    }
    return answer;
    // console.log(answer)
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); //	3
solution([-1, 0, 1], [1, 0, -1]); //-2
// [2] reduce
function solution(a, b) {
    let answer = a.reduce((acc, cur, i) => {
        // console.log( cur, b[i])
        return acc + cur * b[i];
    }, 0);
    // console.log(answer)
    return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]); //	3
solution([-1, 0, 1], [1, 0, -1]); //-2

// 행렬의 덧셈
// 문제 설명
// 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
// 입출력 예
// arr1	arr2	return
// [[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
// [[1],[2]]	[[3],[4]]	[[4],[6]]

// [1]
function solution(arr1, arr2) {
    let answer = [[]];
    // 1. arr1 배열의 전체 배열 요소들을 가져온다
    for (let i = 0; i < arr1.length; i++) {
        // console.log(arr1[i], arr2[i])

        // 2. arr1 배열에서 가져온 배열의 요소들을 참조
        for (let j = 0; j < arr1[i].length; j++) {
            // console.log(arr1[i][j], arr2[i][j])
            // 3. i와 j 인덱스 값으로 각각의 위치에 해당하는 요소들의 합
            let sum = arr1[i][j] + arr2[i][j];
            // console.log(sum, i, j)
            // 4. i에 해당하는 인덱스에 접근시 배열이 없다면 빈 배열생성
            if (answer[i] === undefined) {
                answer[i] = [];
            }
            // 5. i와 j 인덱스를 활용해서 answer의 해당 위치에 데이터를직접삽입
            answer[i][j] = sum;
        }
    }
    // console.log(answer)
    return answer;
}

solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ]
); //	[[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]); //[[4],[6]]

// [2]
function solution(arr1, arr2) {
    let answer = arr1.map((numArr, i) => {
        // console.log(numArr, arr2[i])
        return numArr.map((num, j) => {
            // console.log(num, arr2[i][j])
            return num + arr2[i][j];
        });
    });

    return answer;
}

solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ]
); //	[[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]); //[[4],[6]]

// [3]
function solution(arr1, arr2) {
    let answer = [];

    for (let i = 0; i < arr1.length; i++) {
        answer[i] = [];

        for (let j = 0; j < arr1[i].length; j++) {
            let sum = arr1[i][j] + arr2[i][j];

            answer[i].push(sum);
        }
    }

    return answer;
}

solution(
    [
        [1, 2],
        [2, 3],
    ],
    [
        [3, 4],
        [5, 6],
    ]
); //	[[4,6],[7,9]]
solution([[1], [2]], [[3], [4]]); //[[4],[6]]
