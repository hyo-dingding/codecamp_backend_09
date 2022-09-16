// api 들어가는 부분이 컨트롤러임.

export class ProductController {
    cashService;
    productService;
    constructor(cashService, productService) {
        this.cashService = cashService;
        this.productService = productService;
    }

    buyProduct = (req, res) => {
        // 1. 가진돈 검증하는 코드(대락 10줄 => 2줄 => 1줄)
        const hasMoney = this.cashService.checkValue();

        // 2. 판매여부 검증하는 코드(대략 10줄 정도 => 2줄 => 1줄)
        // zzz(객체)

        const isSoldout = this.productService.checkSoldout();

        // 3. 상품 구매하는 코드
        //  if(돈이 있고 && !판매완료){
        //   res.send("상품 구매완료!")
        //  }
        if (hasMoney && !isSoldout) {
            res.send("상품 구매완료!");
        }
        //
    };

    refundProduct = (req, res) => {
        // 1. 판매여부 검증하는 코드(대략 10줄 정도 => 2줄)

        const isSoldout = this.productService.checkSoldout();

        // 2. 상품 환불하는 코드(판매중인것을 환불할수없음)
        // if(판매완료){
        // res.send("상품 환불 완료!")
        // }
        if (isSoldout) {
            res.send("상품 환불 완료!");
        }
    };
}

//  new 할때마다 메모리 차지함 -> 1번 new해서 사용할 수 있다 -> 디펜던시인덱션
