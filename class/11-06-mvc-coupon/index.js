// 오늘 시나리오 폴더 구조 만들기

import express from "express";

import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
const app = express();

// 상품 API
const productController = new ProductController();
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) 구매하기 API
const couponController = new CouponController();
app.post("/coupons/buy", couponController.buyCoupon); // 상품권(쿠폰) 구매하기 API

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
// 판매여부 검증하는 코드 중복되있는 부분 따로 빼주자! 어떻게 뺄거니?
// 상품관련된것들을 products 끼리 한번에 묶어놓고 import 해서 쓰자
