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
  create({ productCategoryInput }) {
    // DB애 카테고리 등록
    const { ...productCategory } = productCategoryInput;
    const result = this.productCategoriesRepository.save({
      ...productCategory,
    });
    console.log(result);
    return result;
  }
}
