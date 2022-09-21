import express from "express";

import { ProductController } from "./mvc/controllers/product.controller.js";
const app = express();

const productController = new ProductController();

// 상품 API  API만 나열
app.post("/products/buy", productController.buyProduct); // 상품 구매하기 API
app.post("/products/refund", productController.refundProduct); // 상품 환불하기 API

// 쿠폰 구매하기 API

// ()하면안됨 이위치에 넣겠다는 뜻인데 () 히면 함수를 말한것이라 실행이 된다.
