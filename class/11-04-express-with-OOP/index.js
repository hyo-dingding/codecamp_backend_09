// 오늘 시나리오 폴더 구조 만들기

import express from "express";

import { ProductsService } from "./product.js";
import { CashService } from "./cash.js";
const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
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
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
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
});

// 판매여부 검증하는 코드 중복되있는 부분 따로 빼주자! 어떻게 뺄거니?
// 상품관련된것들을 products 끼리 한번에 묶어놓고 import 해서 쓰자

// 쿠폰 구매하기 API

// app.listen(3000, () => {
//     console.log("서버 프로그램을 켜는데 성공했어요");
// });

// 시나리오 흉내만 낼꺼임
// 상품 구매API
// 상품 환불API
// 쿠폰 구매 API
// 이것을 토대로
// 1. class를 활용해서 구조화하기
// 2. 폴더 구조를 구조화하기
// 3. 효율적인 실무구조로 변경하기 알수있다.

// 배울수 있는것은 디팬던시 인덱션, 등등 그걸바탕으로 express안하고 nest.js할거임
// nest.js 다운로드하면 이미 실무구조화 되어있다.
