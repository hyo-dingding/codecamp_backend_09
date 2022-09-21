import { User } from '../../users/entities/user.entity';
import { ProductCategory } from '../../productsCategory/entities/productCategory.entity';
import { ProductSaleslocation } from '../../productSaleslocations/entities/productSaleslocation.entity';
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
import { ProductPay } from 'src/apis/productsPay/entities/productPay.entity';

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

  // [상품위치] 1:1
  @JoinColumn()
  @OneToOne(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation;
  // [상품결제] 1:1
  @JoinColumn()
  @OneToOne(() => ProductPay)
  productPay: ProductPay;

  // [상품이미지] 1:다
  // @OneToMany(() => ProductImage)
  // productImage: ProductImage;

  // [카테고리] 다:1
  @ManyToOne(() => ProductCategory)
  productCategory: ProductCategory;
  // [유저] 다:1
  @ManyToOne(() => User)
  user: User;

  // [상품태그] 다:다
  @JoinTable()
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  productTags: ProductTag[];
}
