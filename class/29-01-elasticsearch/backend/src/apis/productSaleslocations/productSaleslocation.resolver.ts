import { ProductSaleslocationService } from './productSaleslocation.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductSaleslocation } from './entities/productSaleslocation.entity';

@Resolver()
export class ProductSaleslocationResolver {
  constructor(
    private readonly productSaleslocationService: ProductSaleslocationService,
  ) {}
  @Mutation(() => ProductSaleslocation)
  createProductSaleslocation(
    @Args('address') address: string, //
  ) {
    return this.productSaleslocationService.create({ address });
  }
}
