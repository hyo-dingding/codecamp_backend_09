import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductImages } from './entities/productImages.entity';
import { Product } from '../products/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductImagesService {
  constructor(
    @InjectRepository(ProductImages)
    protected readonly productImagesRepository: Repository<ProductImages>, //

    @InjectRepository(Product)
    protected readonly productRepository: Repository<Product>, //
  ) {}

  // findOne({productId}) {
  //   return this.productImagesRepository.findOne({
  //     relations;[
  //       ''
  //     ]
  //   })
  // }

  async updateImages({ productId, productImages }) {
    this.productImagesRepository.delete({ productId });
    const Img = [];
    for (let i = 0; i < productImages.length; i++) {
      const result = await this.productImagesRepository.save({
        productImages: productImages[i],
        isMain: i === 0 ? true : false,
        productId,
      });
      Img.push(result);
    }
    console.log(Img);

    return Img;
  }
}
