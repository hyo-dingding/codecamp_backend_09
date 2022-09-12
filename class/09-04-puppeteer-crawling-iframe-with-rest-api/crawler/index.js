import Puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Stock } from "./models/stock.models.js";

// mongodb접속! 잘되는가 확인 / 크롤러접속 주소 mongodb로 변경
mongoose.connect("mongodb://localhost:27017/my-docker04");

async function startCrawling() {
  // headless:true 하면 켰다고 가정하는것 안뜬다. 브라우저실행이 안됨
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); //주소입력하고 엔터쳤다.  여기까지 인터넷 필요
  page.waitForTimeout(1000); // $eval확인한다  $$ 두개이상있을때 모두다 가져와줘
  // 언제 얼마에 끝났는지

  for (let i = 3; i <= 7; i++) {
    const framePage = await page
      .frames()
      .find((el) => el.url().includes("/item/sise_day.naver?code=005930")); //해당아이프래임 가져오기
    const date = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
      (el) => el.textContent
    );

    const price = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
      (el) => el.textContent
    );

    console.log(`날짜:${date}, 가격:${price}`);

    const stock = new Stock({
      name: "삼성전자",
      date: date,
      price: Number(price.replace(",", "")),
      //price 넣으면안됨 , 있으면 문자로 인식함 숫자로 변경해야함.
    });

    // DB에 넣어주기
    await stock.save();
  }
  // 크롤링 한 데이터가 DB에 넣기

  await browser.close();
}
startCrawling();
