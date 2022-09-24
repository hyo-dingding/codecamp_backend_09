import { Product } from 'src/apis/products/entities/product.entity';
import {
  Injectable,
  UnauthorizedException,
  UnsupportedMediaTypeException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
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
    });
    return result;
  }
  update({ productId, updateProductInput }) {
    const myprodut = this.productRepository.findOne({
      where: { id: productId },
    });
    this.productRepository.save({
      ...myprodut,
      id: productId,
      ...updateProductInput,
    });
  }

  async chechSoldout({ productId }) {
    await this.productRepository.findOne({
      where: { id: productId },
    });
    if (productId.isSoldout) {
      throw new UnauthorizedException('이미 판매 완료된 상품입니다.');
    }
  }
}
