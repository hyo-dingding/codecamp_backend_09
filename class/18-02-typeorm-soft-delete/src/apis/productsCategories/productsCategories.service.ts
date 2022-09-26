import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';

@Injectable()
export class ProductCategoriesService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoriesRepository: Repository<ProductCategory>,
  ) {}
  create(name) {
    // DB애 카테고리 등록
    const result = this.productCategoriesRepository.save({ name });
    console.log(result); // id: fjlsjffjlsls, name: 가전제품}
    return result;
  }
}
