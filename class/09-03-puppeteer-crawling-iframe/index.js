// 여기어때/야놀자 크롤링 위법사례 : https://biz.chosun.com/topics/law_firm/2021/09/29/OOBWHWT5ZBF7DESIRKNPYIODLA/
// 사람인/잡코리아 크롤링 위법사례 : https://brunch.co.kr/@lawmission/113

// import Puppeteer from "puppeteer";

// async function startCrawling() {
//   // headless:true 하면 켰다고 가정하는것 안뜬다. 브라우저실행이 안됨
//   const browser = await Puppeteer.launch({ headless: false });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1280, height: 720 });
//   await page.goto("https://finance.naver.com/item/sise.naver?code=005930"); //주소입력하고 엔터쳤다.
//   page.waitForTimeout(1000); // $eval확인한다  $$ 두개이상있을때 모두다 가져와줘
//   // 언제 얼마에 끝났는지
//   const framePage = await page
//     .frames()
//     .find((el) => el.url().includes("/item/sise_day.naver?code=005930")); //해당아이프래임 가져오기
//   const date = await framePage.$eval(
//     "body > table.type2 > tbody > tr:nth-child(3) > td:nth-child(1) > span",
//     (el) => el.textContent
//   );
//   const price = await framePage.$eval(
//     "body > table.type2 > tbody > tr:nth-child(3) > td:nth-child(2) > span",
//     (el) => el.textContent
//   );
//   console.log(`날짜:${date}, 가격:${price}`);

//   // await browser.close();
// }
// startCrawling();
// 태그를 찾을 수없다는에러 남
// 결론은 아이프레임안에서의 selector이기 때문에 아이프레임안에 들어가서 해주어야함. 아이프래임인지 확인하려면 클릭하면 속성알수있음.
// 아이프레임중 일별시세를 골라야하는데 독보적인 다른것이 있어야하는데 그것이주소임.
// 주소는 동일할수없다.

// ----------반복문 사용해서 뿌려주기
//selector 규칙이 있다. -> 두번째

import Puppeteer from "puppeteer";

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

    // 패턴
    // body > table.type2 > tbody > tr:nth-child(4) > td:nth-child(1) > span
    // body > table.type2 > tbody > tr:nth-child(5) > td:nth-child(1) > span

    const price = await framePage.$eval(
      `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
      (el) => el.textContent
    );

    // body > table.type2 > tbody > tr:nth-child(4) > td:nth-child(2) > span
    // body > table.type2 > tbody > tr:nth-child(5) > td:nth-child(2) > span

    console.log(`날짜:${date}, 가격:${price}`);
  }
  // await browser.close();
}
startCrawling();
