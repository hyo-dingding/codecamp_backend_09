import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoriesService } from './productsCategories.service';
import { ProductCategoriesResolver } from './productsCategories.resolver';
import { Module } from '@nestjs/common';
import { ProductCategory } from './entities/productCategory.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductCategory, //
    ]),
  ],
  providers: [
    ProductCategoriesResolver, //
    ProductCategoriesService,
  ],
})
export class ProductCategoriesModuls {}
