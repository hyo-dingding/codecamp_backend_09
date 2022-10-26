import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './products.resolver';
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productSaleslocations/entities/productSaleslocation.entity';
import { ProductCategory } from '../productsCategories/entities/productCategory.entity';
import { User } from '../users/entities/user.entity';
import { ProductTag } from '../productTags/entities/productTag.entity';
import { ProductSubscriber } from './entities/product.subscriber';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductSaleslocation,
      ProductCategory,
      User,
      ProductTag,
    ]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [
    ProductsResolver, //
    ProductsService,
    ProductSubscriber,
  ],
})
export class ProductsModule {}
