// const { ApolloServer, gql } = require("apollo-server");
import { ApolloServer, gql } from "apollo-server";

// The GraphQL schema
const typeDefs = gql`
  type Query {
    fetchBoards: String
  }
`;

// resolvers 가 API임
const resolvers = {
  Query: {
    fetchBoards: () => {
      return "첫연습";
    },
  },
  // Mutation: {
  //   createBoard: ()={

  //   }
  // },
};

// const app = express(); 이거랑같은 내용
const app = new ApolloServer({
  typeDefs, // 응? 배웠니? 아 숏핸드 프라퍼티 ㅎㅎ
  resolvers,
});

app.listen(3000).then(() => {
  console.log("서버 프로그램을 켜는데 성공했어요");
});

// resolvers => API
