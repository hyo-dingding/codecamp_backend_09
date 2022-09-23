import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductCategory {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  @Column()
  @Field()
  name: string;
}

// @OneToMany() 사실 존재하지 않음/  타입오알엠 역할임. qqq: Product
