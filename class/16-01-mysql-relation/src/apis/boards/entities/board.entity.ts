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
// 그래프큐엘의 필드를 인폴트 해주고 그래프큐엘 타입을 적어줘야함.(대문자)
//  @Column() mysql 에 저장
// @ObjectType() 타입 적어줘야함.
