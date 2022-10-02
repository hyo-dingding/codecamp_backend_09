import { Field, InputType, Int } from '@nestjs/graphql';
import { Column, DeleteDateColumn, Entity } from 'typeorm';
@Entity()
@InputType()
export class CreateUserInput {
  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  password: string;

  @Column()
  @Field(() => String)
  phone: string;

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

  @DeleteDateColumn()
  deletedAt: Date;
}
