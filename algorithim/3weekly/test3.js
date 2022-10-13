/*
    불린 타입

    매개변수 bool로 boolean 타입의 데이터가 들어옵니다.
    만약 bool이 true라면, 문자열 'Yes'를,
    만약 bool이 false라면, 문자열 'No'를 리턴해 주세요.

    - 매개변수 bool은 true 혹은 false만 전달합니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    
    booleanType(true)

    ------------------------------
    output
    ------------------------------

    'Yes'
    
*/

function booleanType(bool) {
    // 여기에서 작업하세요.
    return bool === true ? "Yes" : "No";
}

/*
    양 한 마리, 양 두 마리...

    매개변수 arr로 배열이 주어집니다.
    해당 배열 arr은 문자열을 요소로 가집니다.
    arr의 요소 중에서 문자열 'sheep'이 총 몇개인지
    그 수를 리턴해 주세요.
    
    - arr의 요소는 모두 문자열입니다.
    - Number 타입의 데이터를 리턴해야 합니다.
    - arr의 요소 중 'sheep'이 존재하지 않는다면, 숫자 0을 리턴해 주세요.

    입출력 예시
    ------------------------------
    input
    ------------------------------
    
    const arr = [
      'sheep',
      'wolf',
      'sheep',
      'sheep',
      'human'
    ]

    countingSheep(arr)

    ------------------------------
    output
    ------------------------------

    3
    
*/

function countingSheep(arr) {
    // 여기에서 작업하세요.
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] === "sheep" ? answer++ : answer;
    }
    return answer;
}

/*
    보물찾기

    당신은 보물이 묻혀있는 섬에 도착한 해적단의 선원입니다.
    모래사장에 묻혀있는 보물을 찾아 그 좌표를 선장에게 전달해주세요.

    모래사장은 n * n의 이중배열입니다.
    주어지는 배열 arr에는 문자열 "N"과 문자열 "G"(보물)가 존재합니다.
    문자열 "G"의 좌표 [x, y]를 배열에 담아 리턴해주세요.

    - 주어지는 배열 arr[i]의 요소는 문자열 "N"과 "G"만 존재합니다.
    - 해당 좌표는 각 요소의 index 값을 의미합니다.
    - "G" 문자열의 수가 복수라면 좌표를 이중 배열에, 아니라면 단일 배열에 담아 리턴해주세요.
    - "G" 문자열이 존재하지 않는다면 빈 배열을 리턴해주세요.


    입출력 예시
    ------------------------------
    input
    ------------------------------
    case1:
        [
            ["N", "N", "N", "N"],
            ["N", "G", "N", "N"],
            ["N", "N", "N", "N"],
            ["N", "N", "N", "N"],
        ]

    case2:
        [
            ["N", "G", "N"],
            ["N", "N", "N"],
            ["N", "N", "G"]
        ]
    

    ------------------------------
    output
    ------------------------------
    case1:
        [ 1, 1 ]

    case2:
        [ [ 0, 1 ], [ 2, 2 ] ]

*/

function findGold(arr) {
    // 여기에서 작업하세요.
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i], i)
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(arr[i][j],i,j)
            if (arr[i][j] === "G") {
                answer.push([i, j]);
            }
        }
    }
    return answer.length === 1 ? answer[0] : answer;
}

/*
    문자 제거

    길이 3이상의 문자열 str이 주어집니다.
    주어진 문자열에서
    가장 앞의 문자열과 가장 뒤의 문자열을 제거한
    문자열을 리턴해 주세요.
    
    - 문자열 str 내에 공백은 존재하지 않습니다.
    - 문자열 str은 모두 영어 알파벳으로 구성되어 있습니다.
    - (3 <= str.length)
    
    입출력 예시
    ------------------------------
    input
    ------------------------------

    removeCharacters('abcde')

    ------------------------------
    output
    ------------------------------

    'bcd'
    
*/

function removeCharacters(str) {
    // 여기에서 작업하세요.
    //[1]
    let answer = str.slice(1, str.length - 1);
    // console.log(answer)
    return answer;
    // [2]
    // let answer =''
    // for(let i=0; i<str.length; i++){
    //   console.log(str[i], i)
    // if(i!== 0 && i !==str.length -1){
    //   answer += str[i]
    // }
    // }
    // return answer
}
