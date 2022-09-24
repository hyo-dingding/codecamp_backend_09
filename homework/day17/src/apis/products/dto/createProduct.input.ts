import { Min } from 'class-validator';
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => String)
  name: string;
  @Field(() => String)
  descripstion: string;
  @Min(0)
  @Field(() => Int)
  price: number;
  @Field(() => Boolean)
  isSoldout: boolean;
}
