import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field(() => String)
  writer: string;
  @Field(() => String)
  title: string;
  @Field(() => String)
  contents: string;
}



// 데이터 전송하는 객체 묶어서 보내라 데이터 프렌트포 오브젝트