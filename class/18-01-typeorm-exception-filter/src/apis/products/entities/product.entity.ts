import { ProductCategory } from '../../productsCategories/entities/productCategory.entity';
import { ProductTag } from 'src/apis/productTags/entities/productTag.entity';
import { ProductSaleslocation } from 'src/apis/productSaleslocations/entities/productSaleslocation.entity';
import { User } from 'src/apis/users/entities/user.entity';

import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid') //
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean; // 판매가 완료되면 true가 되니까 기본값주는것이좋음

  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  @Field(() => ProductSaleslocation) // return type인데 얘도 오브젝트 타입이 있어야함.
  productSaleslocation: ProductSaleslocation;

  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[]; // 여러개의 테그를 올릴수 있다 []
}
