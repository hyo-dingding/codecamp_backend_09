import { User } from 'src/apis/users/entities/user.entity';
import { ProductSaleslocation } from 'src/apis/productSaleslocations/entities/productSaleslocation.entity';

import { Field, ObjectType, Int } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductTag } from 'src/apis/productTags/entities/productTag.entity';
// import { ProductPay } from 'src/apis/productsPay/entities/productPay.entity';
import { ProductCategory } from 'src/apis/productsCategory/entities/productCategory.entity';
import { Payment } from 'src/apis/payment/entities/payment.entity';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid') //
  @Field(() => String)
  id: string;
  @Column({ unique: true })
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
  isSoldout: boolean;

  // [상품위치] 1:1
  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;
  // [상품결제] 1:1
  // @JoinColumn()
  // @OneToOne(() => ProductPay)
  // @Field(() => ProductPay)
  // productPay: ProductPay;

  @JoinColumn()
  @OneToOne(() => Payment)
  @Field(() => Payment)
  payment: Payment;

  // [상품이미지] 1:다
  // @OneToMany(() => ProductImage)
  // productImage: ProductImage;

  // [카테고리] 다:1
  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;
  // [유저] 다:1
  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  // [상품태그] 다:다
  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  productTags: ProductTag[];

  // @CreateDateColumn()
  // createAt: Date;

  // @UpdateDateColumn()
  // updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
