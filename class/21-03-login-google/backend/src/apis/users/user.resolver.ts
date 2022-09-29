import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import * as bcrypt from 'bcrypt';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/types/context';
// import { AuthGuard } from '@nestjs/passport';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}

  // rest API 시 필요
  @UseGuards(GqlAuthAccessGuard)
  // @UseGuards(AuthGuard('access')) // 방어막형성 인가가 이루어짐  이것이 실행되야 아래로직 실행됨
  @Query(() => String)
  // context는 req, res 정보 담는 객체임
  fetchUser(@Context() context: IContext) {
    context.req.user;
    // 유저정보 꺼내오기
    console.log(context.req.user);
    console.log('fetchUser 실행완료');

    return 'fetchUser가 실행되었습니다.';
  }
  // @UseGuards()
  // fetchPoint() {}

  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number, // 정수형태로 변경
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    return this.usersService.create({ email, hashedPassword, name, age });
  }
}
