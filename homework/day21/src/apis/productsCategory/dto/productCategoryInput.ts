import { InputType, PartialType } from '@nestjs/graphql';
import { ProductCategory } from '../entities/productCategory.entity';

@InputType()
export class ProductCategoryInput extends PartialType(
  ProductCategory,
  InputType,
) {}
