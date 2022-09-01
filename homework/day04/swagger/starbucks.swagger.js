/**
 * @swagger
 * /starbucks:
 *   get:
 *        summary: 커피목록 가져오기
 *        tags: [Coffeelist]
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
 *                            name:
 *                              type: string
 *                              example: "카라멜 마끼아또"
 *                            kcal:
 *                              type: number
 *                              example: 5
 */
