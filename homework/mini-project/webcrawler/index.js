import Puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Starbucks } from "./models/starbucks.model.js";
// mongodb접속! 잘되는가 확인 / 크롤러접속 주소 mongodb로 변경
mongoose.connect("mongodb://localhost:27017/my-mini-project01");

async function startCrawling() {
  // headless:true 하면 켰다고 가정하는것 안뜬다. 브라우저실행이 안됨
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do"); //주소입력하고 엔터쳤다.  여기까지 인터넷 필요
  page.waitForTimeout(1000); // $eval확인한다  $$ 두개이상있을때 모두다 가져와줘
  // 언제 얼마에 끝났는지

  for (let i = 1; i <= 30; i++) {
    const name = await page.$eval(
      ` #container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    );

    const img = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.src
    );

    const starbucks = new Starbucks({
      name,
      img,
      //price 넣으면안됨 , 있으면 문자로 인식함 숫자로 변경해야함.
    });

    // DB에 넣어주기
    // console.log(name, img);
    await starbucks.save();
  }
  // 크롤링 한 데이터가 DB에 넣기

  await browser.close();
}
startCrawling();
