const { Storage } = require("@google-cloud/storage");
const sharp = require("sharp");

exports.ThumbImage = async (event, context) => {
    // 이미지를 올렸을 때 event가 발생함. 그이미지 버킷을 새 Storage 생성함.
    const storage = new Storage().bucket(event.bucket);

    // 1번쩨 이벤트는 이미지가 버킷에 생성되서 발생,  2번쩨 이벤트는  thumb 생성되어 발생
    // 2번째 이벤트가 발생하는것으로 또 다시 이벤트가 발생 되서 thumb안에 thumb 안에... 폴더가 무한으로 생성됨.
    // 그래서 thumb 폴더가 있다면 더 이상 생성하지 말라고 리턴해줌.
    if (event.name.includes("thumb/")) return;

    // 폴더 이름 : 이미지 크기 객체로 묶어서 사용할것임.
    const sizes = {
        s: 320,
        m: 640,
        l: 1280,
    };

    // key만 꺼내서 함수 선언
    const Img = Object.keys(sizes);

    // Promise.all 을 이욯해 병렬로 저장하기
    const results = await Promise.all(
        Img.map(
            (el) =>
                new Promise((resolve, reject) => {
                    storage
                        .file(event.name) // 파일 찾아오기
                        .createReadStream() // 파일 읽어주기
                        .pipe(sharp().resize({ width: Object.values(sizes)[Img.indexOf(el)] })) // 이미지 사이즈 변경
                        .pipe(storage.file(`thumb/${el}/${event.name}`).createWriteStream()) // 스토리지 파일에  thumb폴더 안에 s,m,l 파일생성
                        .on("finish", () => resolve("성공"))
                        .on("error", () => reject("실패!!"));
                })
        )
    );
    return results;
};

// { width: Object.values(sizes)[Img.indexOf(el)] } => values값[key 값의 인덱스값 ]
// => 처음에 {width: Img.el } 써줬는데 undefined 나옴.(key 값은 다 문자열이고 values 값은 숫자이기 때문에 값이 안나옴)
