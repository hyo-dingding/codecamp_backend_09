import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from './entities/productSaleslocation.entity';

@Injectable()
export class ProductSaleslocationService {
  constructor(
    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,
  ) {}
  create({ address }) {
    const result = this.productSaleslocationRepository.save({ address });
    console.log(result);
    return result;
  }
}
