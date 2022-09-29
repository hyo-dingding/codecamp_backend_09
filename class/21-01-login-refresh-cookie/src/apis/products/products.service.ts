import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from '../productTags/entities/productTag.entity';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly ProductSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductTag)
    private readonly ProductTagsRepository: Repository<ProductTag>,
  ) {}

  findAll() {
    return this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // const result = this.productRepository.save({
    //   ...createProductInput,
    //   // 하나하나 직접 나열하는 방식
    //   // name: '마우수',
    //   // description: '좋은마우스',
    //   // price: 3000,

    // });

    // 2. 상품과 거래 위치 같이 등록하는 경우
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;

    // 2-1 상품판매 위치 등록
    const result = await this.ProductSaleslocationRepository.save({
      ...productSaleslocation,
    });
    // 하나하나 직접 나열하는 방식
    // name: createProductInput.name,
    // description: createProductInput.description,
    // price: createProductInput.price,
    // ProductSaleslocation:{
    //   id:
    // }
    //2-2 상품태그  등록(for문으로 돌리기)
    // productTags가 #전자제품, #영등포 #컴퓨터와 같은 패턴으로 가정
    // 하나하나 저장할때마다 빈배열로 저장
    const temp = [];

    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[i].replace('#', ' ');
      // for문안에서의 await 안티패턴(나중에 Promise.all로 변경)   for 안에서 await 쓰면안됨. 개선필요(비효율적이고 오래걸림.)

      const prevTag = await this.ProductTagsRepository.findOne({
        where: { name: tagname },
      });
      // 기존에 태그가 존재한다면
      if (prevTag) {
        temp.push(prevTag);
        // 기존에 태그가 없었다면
      } else {
        const newTag = await this.ProductTagsRepository.save({
          name: tagname,
        });
        temp.push(newTag); // newTag객체에 3개의 객체가 들어있음.
      }
    }
    console.log('111', temp);

    // 2-3 상품등록
    const result2 = await this.productRepository.save({
      ...product,
      productSaleslocation: result,
      productCategory: {
        id: productCategoryId,

        // name까지 받고 싶다면? 1)  createProductInput에서  productCategoryInput 만들고 name까지 포함시켜서 받아오기
        //                    2)  result2만들기 전에  productCategoryId를 사용해서 카테고리 name을 조회하고 그 name 을 여기에 포함시키기
      },
      productTags: temp,
      // result 통채로 넣기  vs아이디만 빼서 넣기 프론트에서 등록결과를 Saleslocation 모두 받을수 없음
      // ProductSaleslocation: {
      //   id: result.id,
      //   // address: result.address,
      //   // addressDatil: result.addressDatil,
      // },
    });
    //  1. 상품판매 위치 먼저 등록
    // 1. 상품등록
    // 2. 상품판매위치 등록

    // 3. 두 결과(table) 합치기

    // 4. 최종결과 돌려주기
    console.log(result2);

    return result2; // id:lsdflflsfjsjf,  name: '마우수', description: '좋은마우스', price: 3000,
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
    //  finally{} 성공, 실패했던 무조건 1번 실행하는것
    // try~ catch
    // filter 예샹치 못한 에러 발생시 종합적으로 처리해주겠다

    // if (product.isSoldout) {
    //   //예외인 경우
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
  async delete({ productId }) {
    // 1. 실제 삭제
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false;
    // 2. 소프트 삭제(직접구현) - isDeleted
    // (.save, update)
    //  .update({조건},{수정})
    // this.productRepository.update({ id: productId },{ isDeleted: true, isDeleted: false }, );
    // 3. 소프트 삭제(직접 구현) - deletedAt
    // this.productRepository.update({ id: productId }, { deletedAt: new Date() });
    // 4. 소프트 삭제(TypeORM에서 제공) -softRemove
    //   this.productRepository.softRemove({ id: productId }); // 아이디로만 삭제가능

    //5. typeOrm에서 제공 // 다른coumn으로 도 사용가능
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }
}

// 버그 : 실행은되는데 엉뚱한 값이 나옴 .
// try {} catch (error) {}
