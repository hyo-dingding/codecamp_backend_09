import { ProductCategoriesService } from './productsCategories.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';

@Resolver()
export class ProductCategoriesResolver {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}
  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('name') name: string, //
  ) {
    return this.productCategoriesService.create({ name });
  }
}
