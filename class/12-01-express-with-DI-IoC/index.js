import express from "express";

import { ProductController } from "./mvc/controllers/product.controller.js";
import { CouponController } from "./mvc/controllers/coupon.controller.js";
import { CashService } from "./mvc/controllers/services/cash.js";
import { ProductsService } from "./mvc/controllers/services/product.js";
import { PointService } from "./mvc/controllers/services/point.js";
const app = express();

const cashService = new CashService(); // 1. new 한번으로 모든 곳에서 재사용 가능(싱글톤 패턴)
const productService = new ProductsService();
const pointService = new PointService(); // 2. 쿠폰 구매 방식이 포인트 결제로 변경됨(의존성 주입)
// 상품 API
const productController = new ProductController(cashService, productService);
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰(상품권) 구매하기 API
const couponController = new CouponController(pointService);
app.post("/coupons/buy", couponController.buyCoupon); // 상품권(쿠폰) 구매하기 API

app.listen(3000);
//
//
// 1. productController 가 CashService 에 의존하고 있음.(CashService => 의존성)
// 이 상황을 "강하게 결합되고 있다" 라고 표헌 => tight-coupling

//  2. 개선하기 위해서 "느슨한 결합" 으로 변경할 필요가 있음 => loose-coupling
// 변경을 하기위해 밖에서 "의존성 주입" 해줌 => Dependency-Injection(DI)
//  이 역할을 대신 해주는 Nest.js 도구 => IoC 컨테이너 => Inversion-of-Control(제어가 역전되었다.)

// 3. "의존성 주입" 으로 new 를 두번 이상 할  필요가 없어짐 또한, 하나의 의존성을 여러 곳에서 재사용.(싱글톤)
// 대상 class의 소스코드를 직접 수정하지 않고 변경가능(cashService를 pointService로 바꿔치기) => 핵심
// 4. 단  "의존성 주입"이면 "싱글톤 패턴" 인가? => 아님 (단지 디폴트가 "싱글톤"일 뿐!)
