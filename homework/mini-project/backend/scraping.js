import axios from "axios";
import cheerio from "cheerio";
// import puppeteer from "puppeteer";
// import { User } from "./models/user.model.js";
export async function ogMessage(prefer) {
  //  입력된 메세지: "안녕하세요~ https://www.naver.com에 방문해 주세요!"
  // const url = "https://www.naver.com";
  // 1.입력된 메세지에서 http로 시작하는 문장이 있는지 먼저찾기 -> find( )등의 알고리즘 사용하기
  // const browser = await puppeteer.launch({ headless: false });
  // const page = await browser.newPage();
  // await page.setViewport({ width: 1280, height: 720 });
  // await page.goto(ogMessage()); //주소입력하고 엔터쳤다.  여기까지 인터넷 필요
  // page.waitForTimeout(1000); // $eval확인한다  $$ 두개이상있을때 모두다 가져와줘
  // 언제 얼마에 끝났는지

  // const newUser = await User.find({prefer});
  // user = newUser.includes("http");

  // axios.get으로 요쳥해서 html코드 받아오기 -> 스크래핑(긁어오기)

  console.log(prefer);
  const result = await axios.get(prefer);
  //   console.log(result.data);

  const $ = cheerio.load(result.data);
  // 이게 뭔뎅 each((인덱스, 엘리먼트 테그 )=>) 개수만큼 만든다 each  attr()속성(main, content이런것
  //  mata태그에서 property 가 og를 포함하고있다면
  const og = {};
  $("meta").each((i, el) => {
    if ($(el).attr("property")?.includes("og:")) {
      // 옵셔널체이닝
      // if ($(el).attr("property") && $(el).attr("property").includes("og:"))
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      // 빈객체에 key = value넣기
      og[key] = value;
    }
  });
  console.log(og);

  return og;
}
// 빈객체를 만들어서 그안에   key = {title~~~}
//  객체가 만들어지면  return 꺼내야하는데 함수를
// ogMessage("https://www.naver.com");
