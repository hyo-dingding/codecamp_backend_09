import {
  CACHE_MANAGER,
  Inject,
  UnauthorizedException,
  UnsupportedMediaTypeException,
  UseGuards,
} from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { Cache } from 'cache-manager';
import {
  GqlAuthAccessGuard,
  GqlAuthRefreshGuard,
} from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/types/context';
import { UsersService } from '../users/user.service';
import { AuthService } from './auth.service';
import * as jwt from 'jsonwebtoken';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authservice: AuthService, //
    private readonly usersService: UsersService,

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
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

    // 4. 일치하는 유저도 있고 비번도 맞았다면?
    // 5. RefreshToken(=JWT)을 만들어서 frontend 브라우저 쿠키에 저장해서 보내주기

    this.authservice.setRefreshToken({ user, res: context.res });
    // -> accessToken(=> JWT)을 만들어서 브라우저에 전달하기
    // (프론트에서는 브라우저 저장소에 저장해서 필요 시 헤더에 보내줌)
    return this.authservice.getAccessToken({ user });
  }
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async logout(
    @Context() context: IContext, //
  ) {
    // await this.authservice.blackList({ context });

    try {
      const accessToken = await context.req.headers['authorization'].replace(
        'Bearer ',
        '',
      );
      const refreshToken = context.req.headers['cookie'].replace(
        'refreshToken=',
        '',
      );

      jwt.verify(accessToken, 'myAccessKey');

      console.log(jwt.verify(accessToken, 'myAccessKey'));
      jwt.verify(refreshToken, 'myRefreshKey');
      console.log('@@@@@@@@@@@@');

      await this.cacheManager.set(
        `accessToken:${accessToken}`,
        'accessToken',

        {
          ttl:
            jwt.verify(accessToken, 'myAccessKey')['exp'] -
            jwt.verify(accessToken, 'myAccessKey')['iat'],
        },
      );

      await this.cacheManager.set(
        `refreshToken:${refreshToken}`,
        'refreshToken',
        {
          ttl:
            jwt.verify(refreshToken, 'myRefreshKey')['exp'] -
            jwt.verify(refreshToken, 'myRefreshKey')['iat'],
        },
      );
      console.log('##############');
      return '로그아웃에 성공하였습니다';
    } catch (err) {
      throw new UnauthorizedException('실패');
    }
  }

  @UseGuards(GqlAuthRefreshGuard)
  @Mutation(() => String)
  restoreAccessToken(
    @Context() context: IContext, //
    // @CurrentUser() currentUser: any, //
  ) {
    return this.authservice.getAccessToken({ user: context.req.user });
  }
}
