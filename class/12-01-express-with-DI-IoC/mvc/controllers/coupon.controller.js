export class CouponController {
    cashService;

    constructor(cashService) {
        this.cashService = cashService;
    }

    buyCoupon = (req, res) => {
        // 1. 가진돈 검증하는 코드(10줄)
        const hasMoney = this.cashService.checkValue();

        // 2. 쿠폰구매하는 코드
        if (hasMoney) {
            res.send("쿠폰 구매완료!!");
        }
    };
}
