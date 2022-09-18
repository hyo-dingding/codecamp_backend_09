import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
      {
        menu: '아메리카노',
        price: 4500,
        kcal: 5,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 75,
      },
      {
        menu: '카페라떼',
        price: 5000,
        kcal: 110,
        saturated_fat: 4,
        protein: 6,
        salt: 70,
        sugar: 8,
        caffeine: 75,
      },
    ];

    // 2. DB에서 꺼내온 결과를 브라우저에 응답(response) 주기
    return result;
  }
  create({ createStarbucksInput }) {
    // 1. 브라우저에서 보내준 데이터 확인하기

    console.log(`name:${createStarbucksInput.menu}`);
    console.log(`price:${createStarbucksInput.price}`);
    console.log(`kcal:${createStarbucksInput.kcal}`);
    console.log(`saturated_fat:${createStarbucksInput.saturated_fat}`);
    console.log(`protein:${createStarbucksInput.protein}`);
    console.log(`salt:${createStarbucksInput.salt}`);
    console.log(`sugar:${createStarbucksInput.sugar}`);
    console.log(`caffeine:${createStarbucksInput.caffeine}`);

    // 2. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기
    //

    // 3. DB에 저장이 잘 됐으면, 결과를 브라우저에 응답(response) 주기
    return '등록에 성공하였습니다.';
  }
}
