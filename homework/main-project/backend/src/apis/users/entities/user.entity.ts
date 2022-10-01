import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  // @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  phone: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  @Field(() => Int)
  age: number;
  // @Column()
  // @Field(() => String)
  // emailSign: string;
  // @Column()
  // @Field(() => String)
  // date: string;
  // @Column()
  // @Field(() => String)
  // memberSign: string;
  // @Column()
  // @Field(() => Int)
  // point: number;
  // @Column({ default: false })
  // @Field(() => Boolean)
  // online: boolean;
  // @Column()
  // @Field(() => String)
  // personal: string;
  // @Column()
  // @Field(() => String)
  // membership: string;

  @DeleteDateColumn()
  deletedAt: Date;
}
