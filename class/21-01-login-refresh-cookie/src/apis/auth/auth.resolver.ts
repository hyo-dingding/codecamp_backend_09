import { UnsupportedMediaTypeException } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UsersService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { IContext } from 'src/commons/types/context';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authsevice: AuthService, //
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => String)
  async login(
    @Args('email') email: string, //
    @Args('password') password: string,
    @Context() context: IContext,
  ) {
    // 1. email이 일치하는 유저를 DB에서 찾기
    const user = await this.usersService.findOne({ email });

    // 2. 일치하는 유저가 없으면 에러 던지기
    if (!user) {
      throw new UnsupportedMediaTypeException('이메일이 없습니다.');
    }

    // 3. 일치하는 유저가 있지만 비밀번호가 틀렸다면?
    const isAuth = await bcrypt.compare(password, user.password);
    if (!isAuth) {
      throw new UnsupportedMediaTypeException('비밀번호가 틀렸습니다');
    }

    // 4. RefreshToken(=JWT)을 만들어서 frontend 브라우저 쿠키에 저장해서 보내주기
    this.authsevice.setRefreshToken({ user, res: context.res });

    // 4. 일치하는 유저도 있고 비번도 맞았다면?

    // -> accessToken(=> JWT)을 만들어서 브라우저에 전달하기
    // (프론트에서는 브라우저 저장소에 저장해서 필요 시 헤더에 보내줌)
    return this.authsevice.getAccessToken({ user });
  }
}
