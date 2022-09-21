export class CouponController {
    cashService;

    constructor(cashService) {
        this.cashService = cashService;
    }

    buyCoupon = (req, res) => {
        // 1. 가진돈 검증하는 코드(10줄->2줄 ->1줄)
        const hasMoney = this.cashService.checkValue();

        // 2. 쿠폰구매하는 코드
        if (hasMoney) {
            res.send("쿠폰 구매완료!!");
        }
    };
}

//  CouponController class 는 cashService에 의존하고 있다
// cashService는 의존성이라고 부른다 이의존성을 여기서 깔아놓지 말고
// 밖에서 주입해주자 (싱글톤 패턴) 밖에서 주입해서 사용하고 있다.-> 의존성주읩
