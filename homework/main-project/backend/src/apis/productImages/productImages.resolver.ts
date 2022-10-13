import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductImages } from './entities/productImages.entity';
import { ProductImagesService } from './productImages.service';

@Resolver()
export class ProductImagesResolver {
  constructor(
    private readonly productImagesService: ProductImagesService, //
  ) {}

  // @Query(() => [String])
  // fetchImages(@Args('productId') productId: string[]) {
  //   return this.productImagesService.findOne({ productId });
  // }

  // @Mutation(() => [String])
  // createImages(
  //   @Args('productId') productId: string,
  //   @Args('productImageUrl') productImageUrl: string,
  // ) {
  //   return this.productImagesService.Images({ productId, productImageUrl });

  @Mutation(() => [ProductImages])
  updateImages(
    @Args('productId') productId: string, //
    @Args({ name: 'productImages', type: () => [String] })
    productImages: string[],
  ) {
    return this.productImagesService.updateImages({ productId, productImages });
  }
}
