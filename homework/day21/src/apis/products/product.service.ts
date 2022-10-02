import { Product } from 'src/apis/products/entities/product.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productSaleslocations/entities/productSaleslocation.entity';
import { ProductCategory } from '../productsCategory/entities/productCategory.entity';
import { User } from '../users/entities/user.entity';
import { ProductTag } from '../productTags/entities/productTag.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(ProductTag)
    private readonly ProductTagsRepository: Repository<ProductTag>,
  ) {}

  findAll() {
    return this.productRepository.find({
      relations: [
        'productSaleslocation',
        'productCategory',
        'user',
        'productTags',
      ],
    });
  }
  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId },
      relations: [
        'productSaleslocation',
        'productCategory',
        'user',
        'productTags',
      ],
    });
  }
  findWithDelete() {
    return this.productRepository.find({
      relations: ['productCategory', 'productSaleslocation'],
      withDeleted: true,
    });
  }

  async create({ createProductInput }) {
    const {
      productSaleslocation,
      productCategoryId,
      productTags,
      userId,
      ...product
    } = createProductInput;

    const result1 = await this.productSaleslocationRepository.save({
      ...productSaleslocation,
    });

    // const result2 = await this.productCategoryRepository.save({
    //   ...productCategory,
    // });

    // const result3 = await this.userRepository.save({
    //   ...user,
    // });
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
    const result4 = await this.productRepository.save({
      ...product,
      productSaleslocation: result1,
      productCategory: {
        id: productCategoryId,
      },
      user: {
        id: userId,
      },
      productTags: temp,
    });
    return result4;
  }
  update({ productId, updateProductInput }) {
    const myproduct = this.productRepository.findOne({
      where: { id: productId },
    });
    this.productRepository.save({
      ...myproduct,
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

  async delete({ productId }) {
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }

  async restore({ productId }) {
    const result = await this.productRepository.restore({ id: productId });
    return result.affected ? true : false;
  }
}
