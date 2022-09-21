// public , private(안,), protected, readonly

// private readonly  -> 내가 접근만 할 수 있는것
class Eee1 {
    // myPower;
    constructor(private readonly myPower) {
        // this.myPower = myPower;
    }
    ggg() {
        console.log(this.myPower); // 안에서 접근가능
        this.myPower = 10; // 안에서 접근불가능
    }
}

class Eee2 extends Eee1 {
    ggg() {
        console.log(this.myPower); // 자식이 접근불가능
        this.myPower = 10; // 자식이 수정불가능
    }
}
const eeee = new Eee2(50);
console.log(eeee.myPower); // 밖에서 접근불가능
eeee.myPower = 10; // 밖에서 수정불가능
