import { Product } from 'src/apis/products/entities/product.entity';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productSaleslocations/entities/productSaleslocation.entity';
import { ProductCategory } from '../productsCategory/entities/productCategory.entity';
import { User } from '../users/entities/user.entity';
import { ProductTag } from '../productTags/entities/productTag.entity';
import { ProductImages } from '../productImages/entities/productImages.entity';

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

    @InjectRepository(ProductImages)
    private readonly ProductImagesRepository: Repository<ProductImages>,
  ) {}

  findAll() {
    return this.productRepository.find({
      relations: [
        'productSaleslocation',
        'productCategory',
        'user',
        'productTags',
        'productImages',
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
        'productImages',
      ],
    });
  }
  findWithDelete() {
    return this.productRepository.find({
      relations: ['productCategory', 'productSaleslocation'],
      withDeleted: true,
    });
  }

  async create({ createProductInput, productImages }) {
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

    const temp = [];

    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[i].replace('#', ' ');
      // for??????????????? await ????????????(????????? Promise.all??? ??????)   for ????????? await ????????????. ????????????(?????????????????? ????????????.)

      const prevTag = await this.ProductTagsRepository.findOne({
        where: { name: tagname },
      });
      // ????????? ????????? ???????????????
      if (prevTag) {
        temp.push(prevTag);
        // ????????? ????????? ????????????
      } else {
        const newTag = await this.ProductTagsRepository.save({
          name: tagname,
        });
        temp.push(newTag); // newTag????????? 3?????? ????????? ????????????.
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

    // let Img = [];
    for (let i = 0; i < productImages.length; i++) {
      // Img.push(productImages[i]);

      await this.ProductImagesRepository.save({
        productImages: productImages[i],
        isMain: i === 0 ? true : false,
        productId: result4.id,
      });
    }
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
      throw new UnauthorizedException('?????? ?????? ????????? ???????????????.');
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
