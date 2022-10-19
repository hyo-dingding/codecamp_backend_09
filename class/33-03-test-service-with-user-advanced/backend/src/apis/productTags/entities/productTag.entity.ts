import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from 'src/apis/products/entities/product.entity';

import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
  @Column()
  @Field(() => String)
  name: string;
  @ManyToMany(() => Product, (products) => products.productTags)
  @Field(() => [Product])
  products: Product[]; // 여러개의 상품에 올릴수있다 []
}

// FK없다. 1대 다 다대 1 관계 이니 중간테이블 필요
// Column 만들어아함.
// 중간테이블은 연결시키는 정도인데 만약 추가적인 컬럼 더 추가 할경우 중간테이블 직접 만드는게낫다.(추가 컬럼 직접 넣을때)
