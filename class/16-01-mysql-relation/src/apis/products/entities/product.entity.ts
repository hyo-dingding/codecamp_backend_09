import { User } from './../../users/entities/user.entity';
import { ProductCategory } from '../../productsCategory/entities/productCategory.entity';
import { ProductSaleslocation } from './../../productSaleslocations/entities/productSaleslocation.entity';
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
import { ProductTag } from 'src/apis/productTags/entities/productTag.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid') //
  @Field(() => Int)
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  isSoldout: boolean;

  // 1대1관계 상품거래 위치참조하기위해 FK 만듬
  @JoinColumn() // 기준인 곳에서 붙이기
  @OneToOne(() => ProductSaleslocation) // 누구랑 연결할건지 적어주기
  productSaleslocation: ProductSaleslocation;
  //
  // 다 대 1관계 상품카테고리

  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  user: User;

  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[]; // 여러개의 테그를 올릴수 있다 []
}

// 각각테이블 만들고 연걸고리 이어주기
// (productTags) => productTags.products 반대편이 나를 뭘로 생각하는 지 적어줘야함.
