import axios from "axios";
import cheerio from "cheerio";

// async function aaa() {
//   // axios.get으로 요쳥해서 html코드 받아오기 -> 스크래핑(긁어오기)
//   const result = await axios.get("https://www.naver.com");
//   //   console.log(result.data);  {result는 객체로 묶여있어서 result만 받아오려면 .data 해야함.}
// }

// aaa();

//----------------------

async function createMessage() {
  //  입력된 메세지: "안녕하세요~ https://www.naver.com에 방문해 주세요!"

  // 1.입력된 메세지에서 http로 시작하는 문장이 있는지 먼저찾기 -> find( )등의 알고리즘 사용하기
  const url = "https://www.naver.com";

  // axios.get으로 요쳥해서 html코드 받아오기 -> 스크래핑(긁어오기)
  const result = await axios.get(url);
  //   console.log(result.data);
  // og 어떻게 찾아올꺼니?
  // 3. 스크래핑 결과에서 OG(오픈그래프)코드 골라내서 변수에 저장하기
  // result text -> cheerio로 변환할거임. 원하는태그 쉽게 뽑을수있음.
  const $ = cheerio.load(result.data);
  // 이게 뭔뎅 each((인덱스, 엘리먼트 테그 )=>) 개수만큼 만든다 each  attr()속성(main, content이런것
  //  mata태그에서 property 가 og를 포함하고있다면
  $("meta").each((i, el) => {
    if ($(el).attr("property")?.includes("og:")) {
      // 옵셔널체이닝
      // if ($(el).attr("property") && $(el).attr("property").includes("og:"))
      const key = $(el).attr("property"); // og:title , og:description, ....
      const value = $(el).attr("content");
      console.log(key, value);
    }
  });
}

createMessage();
