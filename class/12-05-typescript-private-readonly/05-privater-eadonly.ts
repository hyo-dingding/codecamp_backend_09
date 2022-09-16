// public , private(안,), protected, readonly

// private readonly
class Aaa1 {
    // myPower;
    constructor(private readonly myPower) {
        this.myPower = myPower;
    }
    ggg() {
        console.log(this.myPower); // 안에서 접근가능
        this.myPower = 10; // 안에서 접근불가능
    }
}

class Aaa2 extends Aaa1 {
    ggg() {
        console.log(this.myPower); // 자식이 접근불가능
        this.myPower = 10; // 자식이 수정불가능
    }
}
const aaaa = new Aaa2(50);
console.log(aaaa.myPower); // 밖에서 접근불가능
aaaa.myPower = 10; // 밖에서 수정불가능
