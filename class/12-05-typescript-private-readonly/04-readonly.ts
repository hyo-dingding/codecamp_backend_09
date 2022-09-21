// public , private(안,), protected, readonly

// readonly
class Ddd1 {
    // myPower;
    constructor(readonly myPower) {
        // this.myPower = myPower;
    }
    ggg() {
        console.log(this.myPower); // 안에서 접근불가능
        this.myPower = 10; // 안에서 접근불가능
    }
}

class Ddd2 extends Ddd1 {
    ggg() {
        console.log(this.myPower); // 자식이 접근불가능
        this.myPower = 10; // 자식이 수정불가능
    }
}
const dddd = new Ddd2(50);
console.log(dddd.myPower); // 밖에서 접근불가능
dddd.myPower = 10; // 밖에서 수정불가능
