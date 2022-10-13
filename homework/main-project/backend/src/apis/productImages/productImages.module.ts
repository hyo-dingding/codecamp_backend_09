import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from '../files/file.service';
import { Product } from '../products/entities/product.entity';
import { ProductImages } from './entities/productImages.entity';
import { ProductImagesResolver } from './productImages.resolver';
import { ProductImagesService } from './productImages.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductImages, //
      Product,
    ]),
  ],

  providers: [
    ProductImagesResolver, //
    ProductImagesService,
    FilesService,
  ],
})
export class ProductImagesModule {}
