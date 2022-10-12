// .then()으로 받기
// const onClickPromiseThen = () => {
//     new Promise((resolve, reject) => {
//         // 시간이 걸리는 작업(API 보내기 등)
//         // ..
//         setTimeout(() => {
//             const result = "철수"; // 2초가 걸려서 back에서 '철수' 데이터 받아옴
//             resolve(result); // 성공하면 이거 실행
//             reject(result); // reject("에러가 발생했어요 ") 실패하면 이거 실행=> try catch에서  실패시 사용함
//         }, 2000);
//     })
//         .then((res) => {
//             console.log(res); // 철수
//         })
//         .catch((error) => {
//             console.log(err); // 에러가 발생했어요
//         });
// };
// onClickPromiseThen();
// await 로 받기
const onClickPromiseAwait = async () => {
    const qqq = await new Promise((resolve, reject) => {
        // 시간이 걸리는 작업(API 보내기 등)
        // ..
        setTimeout(() => {
            const result = "철수"; // 2초가 걸려서 back에서 '철수' 데이터 받아옴
            resolve(result); // 성공하면 이거 실행
            reject(result); // reject("에러가 발생했어요 ") 실패하면 이거 실행=> try catch에서  실패시 사용함
        }, 2000);
    });

    console.log(qqq);
};
onClickPromiseAwait();
