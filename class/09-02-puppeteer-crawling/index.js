// 여기어때/야놀자 크롤링 위법사례 : https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
// 사람인/잡코리아 크롤링 위법사례 : https://brunch.co.kr/@lawmission/113

import Puppeteer from "puppeteer";

async function startCrawling() {
  // headless:true 하면 켰다고 가정하는것 안뜬다. 브라우저실행이 안됨
  const browser = await Puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://www.goodchoice.kr/product/search/2/2019"); //주소입력하고 엔터쳤다.
  page.waitForTimeout(1000); // $eval확인한다  $$ 두개이상있을때 모두다 가져와줘
  const stage = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > div > span",
    (el) => el.textContent
  );
  const location = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.name > p:nth-child(4)",
    (el) => el.textContent
  );
  const price = await page.$eval(
    "#poduct_list_area > li:nth-child(2) > a > div > div.price > p > b",
    (el) => el.textContent
  );
  console.log(stage);
  console.log(location.trim());
  console.log(price);
  // await browser.close();
}
startCrawling();
