// public , private, protected, readonly

//  private
class Bbb1 {
    // myPower;
    constructor(private myPower) {
        // this.myPower = myPower;
    }
    ggg() {
        console.log(this.myPower); // 안에서 접근가능
        this.myPower = 10; // 안에서 수정가능
    }
}

class Bbb2 extends Bbb1 {
    ggg() {
        console.log(this.myPower); // 자식이 접근불가능
        this.myPower = 10; // 자식이 수정불가능
    }
}
const bbbb = new Bbb2(50);
console.log(bbbb.myPower); // 밖에서 접근불가능
bbbb.myPower = 10; // 밖에서 수정불가능
