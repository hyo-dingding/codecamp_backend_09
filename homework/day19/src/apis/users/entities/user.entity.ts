import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
  @Field(() => Int)
  password: number;

  @Column()
  @Field(() => String)
  phone: number;

  @Column()
  @Field(() => String)
  email: string;

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
}
