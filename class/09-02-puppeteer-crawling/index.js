// 여기어때/야놀자 크롤링 위법사례 : https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
// 사람인/잡코리아 크롤링 위법사례 : https://brunch.co.kr/@lawmission/113

import Puppeteer from "puppeteer";

async function startCrawling() {
  // headless:true 하면 브라우저가 안뜬다. 브라우저실행이 안됨(속도빠름)
  // headless:false 하면 브라우저가 뜸. 처음은 보면서하는게 좋음
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://www.goodchoice.kr/product/search/2/2019"); //주소입력하고 엔터쳤다.
  page.waitForTimeout(1000);

  // $eval : 확인한다  힌개 가져와줘
  // $$eval : 두개 이상있을때 모두다 가져와줘
  // 3성급
  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span", // copy -> copy selector
    (el) => el.textContent //  (위에서 가져온 값이) => 텍스트 값만 꺼내서 보여줌
  );
  // 위치
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  // 가격
  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );
  console.log(stage);
  console.log(location.trim());
  console.log(price);
  // trim() -> 주소 양옆에 빈문자열 이있음 지우는것
  // await browser.close();  브라우저 끝날때 까지 기다려줘
}
startCrawling();
