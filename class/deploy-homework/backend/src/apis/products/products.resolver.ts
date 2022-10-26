import { UpdateProductInput } from './dto/updateProduct.input';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './dto/createProduct.Input';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Resolver()
export class ProductsResolver {
  constructor(
    private readonly productService: ProductsService, //

    private readonly elasticsearchService: ElasticsearchService,
  ) {}

  @Query(() => String)
  // @Query(() => [Product]) //목록조회
  // 엘라스틱서치에서 조회하기 연습
  async fetchProducts(
    @Args({ name: 'search', nullable: true }) search: string, //
  ) {
    const result = await this.elasticsearchService.search({
      // index: 'myproduct09', // 컬렉션명 필요(이름을 인덱스라고 부름)
      index: 'myproduct0999',

      query: {
        match: { description: search }, // 일반적인 nGram 검색방법
        // wildcard: { description: `*${search}*` }, // nGram  없이 검색이 가능하지만 성능이 느림
      },
    });
    console.log(JSON.stringify(result, null, '  '));

    return 'elasticsearch에서 조회완료';
    // 엘라스틱서치에 조회 해보기위해 임시로 주석!
    // return this.productService.findAll();
    // return [result];
  }

  @Query(() => Product) //1개조회
  fetchProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.findOne({ productId });
  }

  // @Mutation(() => String) //등록
  @Mutation(() => Product) //등록
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    // 엘라스틱 서치에 등록하기 연습
    // this.elasticsearchService.create({
    //   id: 'myid',
    //   index: 'myproduct09', // 어떤 컬렉션에 저장할지 적기
    //   document: {
    //     // 컬렉션 서류봉투안에 문서 저장하기
    //     // name: '삐삐',
    //     // age: 8,
    //     // school: '다람쥐초등학교',
    //     ...createProductInput,
    //   },
    // });
    // return 'elasticsearch에서 등록완료';
    // 엘라스틱서치에 등록 해보기위해 임시로 주석!
    return this.productService.create({ createProductInput });
  }
  // updateProductInput 상품판매위치 포함되야함.
  @Mutation(() => Product)
  async updateProduct(
    @Args('productId') productId: string,
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    // 판매완료가 되었는지 확인하기
    await this.productService.checkSoldout({ productId });

    // 수정하기
    return this.productService.update({ productId, updateProductInput });
  }

  // 삭제하기

  @Mutation(() => Boolean)
  deleteProduct(
    @Args('productId') productId: string, //
  ) {
    return this.productService.delete({ productId });
  }
}
