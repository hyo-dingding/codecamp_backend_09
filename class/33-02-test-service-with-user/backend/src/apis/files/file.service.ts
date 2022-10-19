import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';

@Injectable()
export class FilesService {
  upload({ file }) {
    console.log(file);

    // 파일을 클라우드 스토리지에 저장하는 로직
    // 스토리지 세팅하기
    const storage = new Storage({
      projectId: 'backand',
      keyFilename: 'backand-292bbe1cbb7d.json',
    }).bucket('backend09-storage');

    // 세팅된 스토리지에 파일 올리기
   
    file
      .createReadStream()
      .pipe(storage.file(file.filename).createWriteStream())
      .on('finish', () => console.log('성공!!'))
      .on('error', () => console.log('실패!!'));
 
 
 
      // 다운로드 URL 브라우저에 돌려주기
    return file.filename;
  }
}

//
// 1. 스토리지 가서 저장할 폴더 만들어주기
// --폴더에 관한 세팅권한이 필요함. 클라우드에서 받아와서 접속해서 저장함.
// 2. 저장기능 설치하기(GCP 전용기능)
// --@google-cloud/storage 구글스토리지 설치
