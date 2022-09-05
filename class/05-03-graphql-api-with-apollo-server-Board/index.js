// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";
import { CheckPhone, getToken, sendTokenToSMS } from "./phone.js";

const typeDefs = gql`
  # 입력에 들어가는타입은 input 으로 써줘야함
  #  !는 안붙여도 되나?
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }
  #  나만의 타입을 만듬. 객체형태 { Number: 1, writer: "다다", title: "다다입니당", contents: "가가가가",} 이것을 나타냄
  type MyReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }
  type Query {
    # fetchBoards: MyReturn 겍체 한개를 의미함.
    fetchBoards: [MyReturn] # 배열안에 객체를 의미 [{}]
  }
  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String => 입력데이터를 낱개로 보냄
    createBoard(createBoardInput: CreateBoardInput!): String # => 입력 데이터를 묶어서 보냄(실무형)
    createTokenOfPhone(myPhone: String): String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: (parent, args, ctx, info) => {
      //  1. 데이터 조회하는 로직 = DB접속해서 데이터 꺼내오기
      const result = [
        {
          Number: 1,
          writer: "다다",
          title: "다다입니당",
          contents: "가가가가",
        },
        {
          Number: 1,
          writer: "나나",
          title: "나나입니당",
          contents: "나나나나",
        },
        {
          Number: 1,
          writer: "가가",
          title: "가가입니당",
          contents: "다다다다",
        },
      ];

      // 2. DB에 꺼내온 결과를 브라우저에 응답(response)주기
      return result;
    },
  },
  Mutation: {
    createBoard: (_, args) => {
      // 1. 브라우저에서 보내준 데이터 확인하기

      console.log(args.createBoardInput.writer);
      console.log(args.createBoardInput.title);
      console.log(args.createBoardInput.contents);
      // fetchBoards("철수");  parent임

      // 2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

      // 3. DB에 저장이 됬으면 결과를 브라우저에 응답(response) 주기
      return "게시물 등록에 성공하였습니다.";
    },
    createTokenOfPhone: (_, args) => {
      const myPhone = args.myPhone;

      // 1. 핸드폰번호 자릿수 맞는지 확인하기.
      const isValid = CheckPhone(myPhone);
      if (isValid === false) return;

      // 2. 핸드폰 토큰 6자리 만들기.(getToken)
      const myToken = getToken();
      // 3. 핸드폰번호에 토큰 전송하기.
      sendTokenToSMS(myPhone, myToken);
      return "인증완료!!";
    },
  },
};

// const app = express(); 이거랑같은 내용
const app = new ApolloServer({
  typeDefs, // 응? 배웠니? 아 숏핸드 프라퍼티 ㅎㅎ
  resolvers,
  cors: true,
  // cors:{origin:["http://"]}
});

app.listen(3000).then(() => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});

// resolvers => API
// args 브라우저에서 보낸 데이터 브라우저의 데이터의 값
// parent 백에서 벡으로 요청할수 도 있음 백에서 요청하는 데이터의 값
// context.res /  context.req
// info  다양한 정보
