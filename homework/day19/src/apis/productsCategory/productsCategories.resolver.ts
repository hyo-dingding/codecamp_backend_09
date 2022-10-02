import { ProductCategoriesService } from './productsCategories.service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductCategoryInput } from './dto/productCategoryInput';

@Resolver()
export class ProductCategoriesResolver {
  constructor(
    private readonly productCategoriesService: ProductCategoriesService,
  ) {}
  @Mutation(() => ProductCategory)
  createProductCategory(
    @Args('productCategoryInput') productCategoryInput: ProductCategoryInput, //
  ) {
    return this.productCategoriesService.create({ productCategoryInput });
  }
}
