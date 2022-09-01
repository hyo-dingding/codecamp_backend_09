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
