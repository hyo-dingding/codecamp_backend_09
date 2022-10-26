import { CACHE_MANAGER, Inject } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Cache } from 'cache-manager';
import { CreateProductInput } from './dto/createProduct.input';
import { UpdateProductInput } from './dto/updateProduct.input';
import { Product } from './entities/product.entity';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(
    private readonly productService: ProductService, //
    private readonly elasticsearchService: ElasticsearchService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  // @Query(() => [Product])
  // fetchProducts() {
  //   return this.productService.findAll();
  // }
  @Query(() => [Product])
  async fetchProducts(
    @Args('search') search: string, //

    // @Args('page') page: string,
  ) {
    // 1. 캐쉬에서 확인하기
    // 2. 캐쉬가 있으면 클라이언트에 반환하기
    console.log(search);

    const cache = await this.cacheManager.get(search);

    // console.log(cache);
    if (cache) {
      return cache;
    }
    // 3. 캐쉬에 없으면 Elasticsearch에서 검색하기 (상품이름검색하기)

    const el = await this.elasticsearchService.search({
      index: 'myproduct_new',
      query: {
        match_phrase_prefix: { name: search },
      },
    });

    const result = el.hits.hits.map((el) => {
      return el._source;
    });
    console.log(result);

    // 4. 검색 결과를 redis에 저장하기
    const mycache = await this.cacheManager.set(search, result, { ttl: 0 });
    console.log(mycache);

    // 5.  조회한결과를 클라이언트에 반환하기

    // console.log(JSON.stringify(result, null, ' '));
    // const result = JSON.stringify(el, null, ' ');

    return result;
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
