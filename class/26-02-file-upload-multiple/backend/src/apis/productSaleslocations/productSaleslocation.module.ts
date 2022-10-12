import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocationService } from './productSaleslocation.service';
import { ProductSaleslocationResolver } from './productSaleslocation.resolver';
import { Module } from '@nestjs/common';
import { ProductSaleslocation } from './entities/productSaleslocation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductSaleslocation, //
    ]),
  ],
  providers: [
    ProductSaleslocationResolver, //
    ProductSaleslocationService,
  ],
})
export class ProductSaleslocationModule {}
