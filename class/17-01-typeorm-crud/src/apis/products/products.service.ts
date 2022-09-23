import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId },
    });
  }

  create({ createProductInput }) {
    const result = this.productRepository.save({
      ...createProductInput,
      // 하나하나 직접 나열하는 방식
      // name: '마우수',
      // description: '좋은마우스',
      // price: 3000,
    });
    return result; // id:lsdflflsfjsjf,  name: '마우수', description: '좋은마우스', price: 3000,
  }
  async update({ productId, updateProductInput }) {
    const myporduct = await this.productRepository.findOne({
      where: { id: productId },
    });

    const result = this.productRepository.save({
      // this.productRepository.create() // 등록을 위한 빈객체만들기
      // this.productRepository.insert() // 결과는 못받는 등록방법
      // this.productRepository.update() // 결과는 못받는 수정방법

      //순서중요 수정후 수정되지 않은 다른 결과값까지 모두 받고싶을 때 사용
      ...myporduct, // 기존등록된것 스프레드
      id: productId,
      ...updateProductInput, // 수정된것 스프레드하면 같은키가 있으면 아래가 위껏을 덮기때문
    });
    return result;
  }
  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    }

    // if (product.isSoldout) {
    //   //예외인 경우
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
}

// 버그 : 실행은되는데 엉뚱한 값이 나옴 .
// try {} catch (error) {}
