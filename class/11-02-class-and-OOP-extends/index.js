// class Date {
//     getFullYear(){

//     }

//     getMonth(){

//     }
// }

const aaa = new Date();
console.log(aaa.getFullYear()); // 2022

console.log(aaa.getMonth() + 1); // 9

// 함수 따로 관리 하면 중구난방이니까 묶어서 사용함.
class Monster {
    power = 10;
    constructor(aaa) {
        this.power = aaa;
    }
    // 공격하기 기능
    attack = () => {
        // this.attack
        // this.power
        console.log("공격하자!!!");
        console.log("내 공격력은" + this.power + "야!!");
    };

    // run = () => {
    //     console.log("도망가자!");
    // };
}

class 공중몬스터 extends Monster {
    constructor(qqq) {
        super(qqq);
    }
    run = () => {
        console.log("날라서 도망가자"); // 설명서 만듬
    };
}

// 공격하자!!!
// 내 공격력은20야!!
// 날라서 도망가자

class 지상몬스터 extends Monster {
    constructor(www) {
        super(www);
    }
    run = () => {
        console.log("뛰어서 도망가자");
    };
}

const myMonster1 = new 공중몬스터(20);

myMonster1.attack();
myMonster1.run();

const myMonster2 = new 지상몬스터(50);

myMonster2.attack();
myMonster2.run();

// 공격하자!!!
// 내 공격력은50야!!
// 뛰어서 도망가자

// 공중몬스터, 지상몬스터 run만 달라지는데 똑같은 함수를 또 만들어야할까?
// 1. 공통인 부분을 뽑아서 묶어주고
// 2. class 공중몬스터() ,class 지상몬스터() 만들기
// 3. 몬스터 기능을 물려받아서 넣는다


// attack 다중상속은 안됨. 

//  extends ? 부모의 기능을 자식에게 물려주는것이 상속임.
// 내 공격력은undefined야!! 초기값 안줘서 (20),(50)
