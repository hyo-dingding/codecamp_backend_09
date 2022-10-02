import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from 'src/apis/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class ProductPay {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;
  @Column()
  @Field(() => String)
  name: string;
  @Column()
  @Field(() => String)
  paymentDate: number;
  @Column()
  @Field(() => Int)
  total: number;
  @Column()
  @Field(() => Int)
  paymentTime: number;
  @Column({ default: false })
  @Field(() => Boolean)
  isPaySoldout: boolean;
  @Column({ default: false })
  @Field(() => Boolean)
  isCancel: boolean;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;
}
