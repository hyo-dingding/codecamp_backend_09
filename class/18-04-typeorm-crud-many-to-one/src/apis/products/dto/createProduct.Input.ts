import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { ProductSaleslocationInput } from 'src/apis/productSaleslocations/dto/productSaleslocationInput';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Min(0)
  @Field(() => Int)
  price: number;

  @Field(() => ProductSaleslocationInput)
  productSaleslocation: ProductSaleslocationInput;

  @Field(() => String)
  productCategoryId: string;
  // string 문자열만 id: 숫자들어오면 string 으로 변경됨
}

// @Field(() => ProductSaleslocation)
// productSaleslocation: ProductSaleslocation;
// // 이렇게 끝나면 안됨. 스키마 보면 알수 있음. input type이여야하는데 object type 이라 안되고 아이디도안됨
