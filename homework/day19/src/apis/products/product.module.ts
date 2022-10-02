import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { Module } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductSaleslocation } from '../productSaleslocations/entities/productSaleslocation.entity';
import { ProductCategory } from '../productsCategory/entities/productCategory.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      ProductSaleslocation,
      ProductCategory,
      User,
    ]),
  ],
  providers: [
    ProductResolver, //
    ProductService,
  ],
})
export class ProductModule {}
