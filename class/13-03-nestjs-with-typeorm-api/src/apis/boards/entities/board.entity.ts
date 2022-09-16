import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;
  @Column()
  @Field(() => String)
  writer: string;
  @Column()
  @Field(() => String)
  title: string;
  @Column()
  @Field(() => String)
  contents: string;
}

// db 테이블에 들어갈 내용
