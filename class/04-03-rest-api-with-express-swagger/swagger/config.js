export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "나만의 미니프로젝트 API 명세서", // API이름
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // ./swagger안에 swagger.js로 끝나는 * 모든파일
};
// const openapiSpecification = swaggerJsdoc(options);
