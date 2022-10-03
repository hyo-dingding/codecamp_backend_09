/*
    객체 속성 추가하기

    두 개의 객체 obj1, obj2가 주어집니다.
    obj1과 obj2의 키-값 쌍을 합쳐서 리턴해주세요.

    - obj1과 obj2를 합치는 과정에서 중복되는 키가 존재한다면, obj1의 키-값 쌍을 기준으로 하여 합칩니다.
    - Object.assign() 메소드의 사용은 금지됩니다.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    const obj1 = {
      a: 1,
      b: 2,
    };
    
    const obj2 = {
      b: 3,
      c: 3,
    };

    ------------------------------
    output
    ------------------------------

    { a: 1, b: 2, c: 3 }
*/

function addNew(obj1, obj2) {
    // 여기에서 작업하세요.
    const newObj = { ...obj2, ...obj1 };
    // console.log(newObj);
    return newObj;
}

/*
    공백 제거

    영어 단어가 담긴 문자열 word가 주어집니다.
    해당 단어에는 사이 사이에 공백이 존재합니다.
    공백은 여러 칸일 수도 있습니다. "a   b c"
    해당 공백을 제외시킨 문자열을 리턴해주세요.

    입출력 예시
    ------------------------------
    input
    ------------------------------

    "c od e cam p"

    ------------------------------
    output
    ------------------------------

    "codecamp"
*/

function noSpaces(str) {
    // 여기에서 작업하세요.
    let answer = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            answer += str[i];
        }
    }
    return answer;
}

/*
    특별한 날

    2월 19일은 hoony에게 특별한 날입니다.
    dayBefore 함수는 매개변수로 월과 일자인 month와 day를 받습니다. 
    해당 월과 일자가 2월 19일보다 이전이면 'Before', 이후라면 'After',
    당일이라면 'Special'을 리턴해주세요. 
		
    - month는 1에서 12사이, day는 1에서 31사이의 정수입니다. 

    입출력 예시
    ------------------------------
    input
    ------------------------------

    specialDay(2, 15)

    ------------------------------
    output
    ------------------------------

    'Before'
*/

function specialDay(month, day) {
    // 여기에서 작업하세요.
    let answer = "";
    // console.log(month,day)
    if (month === 2 && day === 19) {
        return "Special";
    }

    if ((month >= 2 && day >= 20) || (month >= 3 && day >= 1)) {
        answer = "After";
    } else if (month <= 2 && day >= 1) {
        answer = "Before";
    }
    return answer;
}
