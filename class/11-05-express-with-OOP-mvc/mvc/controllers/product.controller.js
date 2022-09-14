// api 들어가는 부분이 컨트롤러임.

import { ProductsService } from "./services/product.js";
import { CashService } from "./services/cash.js";

export class ProductController {
    buyProduct = (req, res) => {
        // 어떤 내용이 올지 실무적으로 가정하자
        // 1. 가진돈 검증하는 코드(대략 10줄 정도)
        const cashService = new CashService();
        const hasMoney = cashService.cashValue();

        // 2. 판매여부 검증하는 코드(대략 10줄 정도 => 2줄) 중고상품일경우 상품이 이미 팔린것일 수 있기때문에
        // zzz(객체)
        const productService = new ProductsService(); // 일반적 관례
        const isSoldout = productService.checkSoldout();

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
        const productService = new ProductsService();
        const isSoldout = productService.checkSoldout();

        // 2. 상품 환불하는 코드(판매중인것을 환불할수없음)
        // if(판매완료){
        // res.send("상품 환불 완료!")
        // }
        if (isSoldout) {
            res.send("상품 환불 완료!");
        }
    };
}
