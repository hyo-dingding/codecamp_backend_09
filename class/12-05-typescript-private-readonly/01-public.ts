//public , private, protected, readonly

// public;
class Aaa1 {
    // myPower;
    constructor(public myPower) {
        // this.myPower = myPower;  public , private, protected, readonly 한개라도 있으면 자동생성됨.
    }
    ggg() {
        console.log(this.myPower); // 안에서 접근가능
        this.myPower = 10; // 안에서 수정가능
    }
}

class Aaa2 extends Aaa1 {
    ggg() {
        console.log(this.myPower); // 자식이 접근가능
        this.myPower = 10; // 자식이 수정가능
    }
}
const aaaa = new Aaa2(50);
console.log(aaaa.myPower); // 밖에서 접근가능
aaaa.myPower = 10; // 밖에서 수정가능
