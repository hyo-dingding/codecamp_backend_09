import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(() => [Product])
  fetchProducts() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  fetchProduct(@Args('productId') productId: string) {
    return this.productService.findOne({ productId });
  }
  @Query(() => [Product])
  fetchProductsWithDeleted() {
    return this.productService.findWithDelete();
  }

  // @Query(() => Product)
  // fetchProduct(@Args('productId') productId: string) {
  //   return this.productService.withDeleted({ productId });
  // }

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
    @Args({ name: 'productImages', type: () => [String] })
    productImages: string[],
  ) {
    return this.productService.create({ createProductInput, productImages });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    await this.productService.chechSoldout({ productId });

    return this.productService.update({ productId, updateProductInput });
  }

  @Mutation(() => Boolean) // 삭제가됬니 안됬니?
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }

  @Mutation(() => Boolean) // 삭제가됬니 안됬니?
  restoreProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.restore({ productId });
  }
}
