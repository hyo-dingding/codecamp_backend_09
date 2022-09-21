
import { CreateBoardInput } from './dto/createBoard.Input';
// 비지니스 로직

import { Injectable } from '@nestjs/common';
@Injectable()
export class BoardsService {
  // qqq() {
  //   return 'Hello World';
  // }
  findAll() {  // 전체조회
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
      {
        number: 1,
        writer: '철수',
        title: '제목입니다~~',
        contents: '내용이에요!!',
      },
      {
        number: 2,
        writer: '영희',
        title: '영희입니다~~',
        contents: '영희이에요!!',
      },
      {
        number: 3,
        writer: '훈이',
        title: '훈이입니다~~',
        contents: '훈이이에요!!',
      },
    ];

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
    return result;
  }
  create({ createBoardInput }) {
    // 1. 브라우저에서 보내준 데이터 확인하기
    console.log(CreateBoardInput.writer);
    console.log(createBoardInput.title);
    console.log(createBoardInput.contents);

    // 2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
    //

    // 3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답(response) 주기
    return '게시물 등록에 성공하였습니다.';
  }
}
