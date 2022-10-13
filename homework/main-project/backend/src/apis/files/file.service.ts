import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class FilesService {
  async upload({ files }) {
    // console.log(files);

    const waitedFiles = await Promise.all(files);
    console.log(waitedFiles); // [file, file]

    // 파일을 클라우드 스토리지에 저장하는 로직
    // 스토리지 세팅하기

    const storage = new Storage({
      projectId: process.env.STORAGE_PROJECT_ID,
      keyFilename: process.env.STORAGE_KEY_FILE_NAME,
    }).bucket(process.env.STORAGE_BUCKET);

    // 세팅된 스토리지에 파일 올리기
    const results = await Promise.all(
      waitedFiles.map(
        (el) =>
          new Promise((resolve, reject) => {
            el.createReadStream()
              .pipe(storage.file(el.filename).createWriteStream())
              .on('finish', () =>
                resolve(`${process.env.STORAGE_BUCKET}/${el.filename}`),
              )
              .on('error', () => reject('실패!!'));
          }),
      ),
    );

    // 다운로드 URL 브라우저에 돌려주기
    return results; //이렇게 하면 기다리지 않는다
  }
}

//
// 1. 스토리지 가서 저장할 폴더 만들어주기
// --폴더에 관한 세팅권한이 필요함. 클라우드에서 받아와서 접속해서 저장함.
// 2. 저장기능 설치하기(GCP 전용기능)
// --@google-cloud/storage 구글스토리지 설치

// 1. new 프로미스 감싸줘서 await 사용 가능하게 만들기
// 2. promiseAll로 한번에 await만들기
