import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './createProduct.Input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  // @Field(()=> String)
  // qqq:string
}

// PickType(CreateProductInput, ['name', 'price']); //=> 고르기 원하는것만 골라줘
// OmitType(CreateProductInput, ['descripstion']); // => 빼기 이것만 뺄래요
// PartialType(CreateProductInput); // => 있어도 되고 없어도 되고 nullable
