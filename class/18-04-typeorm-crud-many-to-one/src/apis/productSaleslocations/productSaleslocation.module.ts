import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSaleslocationService } from './productSaleslocation.service';
import { ProductSaleslocationResolver } from './productSaleslocation.resolver';
import { Module } from '@nestjs/common';
import { ProductSaleslocation } from '../../../../../homework/day19/src/apis/productSaleslocations/entities/productSaleslocation.entity';

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
