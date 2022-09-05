/**
 * @swagger
 * /users:
 *   get:
 *        summary: 회원정보 가져오기
 *        tags: [Users]
 *        parameters:
 *              - in: query
 *                name: number
 *                type: int
 *        responses:
 *            200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                        type: array
 *                        items:
 *                          properties:
 *                            email:
 *                              type: string
 *                              example: "aaa@aaa.com"
 *                            name:
 *                              type: string
 *                              example: "딩딩"
 *                            phone:
 *                              type: string
 *                              example: "010-1111-2222"
 *                            personal:
 *                              type: string
 *                              example: "222222-1222222"
 *                            prefer:
 *                              type: string
 *                              example: "https://naver.com"
 *
 *
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: 회원 등록하기
 *     tags: [user]
 *     responses:
 *          200:
 *              description: 성공
 */

//  GET 방식이고 파라미터를 하나도 받지 않은 경우라면 적지 않는것이 맞다.
//  parameters는 req body 등을 통해 api에 입력 되는 매개 변수라 생각하면 쉽습니다.
//  즉, 지금 구현된 api 에서는 매개 변수를 받지 않고 있기 때문에 좀 더 정확한 API 명세를 만들기 위해
//  삭제하는 것도 고려해 보면 좋을 듯 하네요
