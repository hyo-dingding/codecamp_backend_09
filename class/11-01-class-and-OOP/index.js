// class Date {
//     getFullYear(){

//     }

//     getMonth(){

//     }
// }

const aaa = new Date();
console.log(aaa.getFullYear());
console.log(aaa.getMonth() + 1);

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

    run = () => {
        console.log("도망가자!");
    };
}
// 옵션변경하고 싶을때

const myMonster1 = new Monster(20);
myMonster1.attack();
myMonster1.run();

const myMonster2 = new Monster(50);
myMonster2.attack();
myMonster2.run();
