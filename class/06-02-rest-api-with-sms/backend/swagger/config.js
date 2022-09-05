// 설정 파일 컴피그파일 ==> 세팅파일이라고함.
export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "나만의 미니프로젝트 API 명세서",
      version: "1.0.0",
    },
  },
  apis: ["./swagger/*.swagger.js"], // 파일 주소 입력
};
// const openapiSpecification = swaggerJsdoc(options);
