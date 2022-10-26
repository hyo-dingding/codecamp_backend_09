import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productSaleslocations/entities/productSaleslocation.entity';
import { ProductCategory } from '../productsCategory/entities/productCategory.entity';
import { User } from '../users/entities/user.entity';
import { ProductTag } from '../productTags/entities/productTag.entity';
import { Payment } from '../payment/entities/payment.entity';
import { ProductImages } from '../productImages/entities/productImages.entity';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      Payment,
      ProductSaleslocation,
      ProductCategory,
      User,
      ProductTag,
      ProductImages,
    ]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [
    ProductResolver, //
    ProductService,
  ],
})
export class ProductModule {}
