// type 추론 처음들어온 값을 토대로 추측함.  / type추론
let aaa = "안녕하세요";
aaa = 3;
aaa = "철수";

// type명시
let bbb: string = "반갑습니다.";
bbb = 3;
bbb = "철수";

// type명시가 필요한 상황
let ccc: string | number = 1000;
ccc = "1000원";

// number type
let ddd: number = 2;
ddd = "철수";

// boolean type
let eee: boolean = true;
eee = false;
eee = "false"; // true로 작동함.  js에서는 오류 안남.   false 일때 : "" 0 null undefined NaN

// [ ] type
let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];

let ggg: string[] = ["철수", "영희", "훈이", 1];

let hhh: (string | number)[] = [1, 2, 3, 4, 5, "안녕하세요"]; // type을 추론해서 어떤 type 을 사용하는지 알아보기

// { } type
interface IProfile {
    name: string;
    age: number | string;
    school: string;
    hobby?: string; // ? 있을 수도 있고 없을 수도 있어
}

const profile: IProfile = {
    name: "철수",
    age: 8,
    school: "다람쥐 초등학교",
};

profile.name = "영희";
profile.hobby = "수영";
profile.age = "8살";

//  함수 type  어디서 몇번이든 호출 가능하므로 타입추론 할 수 없음.(반드시 타입명시 필요!!)
function add1(num1: number, num2: number, unit: string): string {
    return num1 + num2 + unit;
}

const result1 = add1(1000, 2000, "원"); // 결과의 return type도 예측가능

const add2 = (num1: number, num2: number, unit: string): string => {
    return num1 + num2 + unit;
};

const result2 = add2(1000, 2000, "원");

// any type

let qqq: any = "철수"; // 자바스크립트와 동일!
qqq = "철수";
qqq = 1;
qqq = true;
