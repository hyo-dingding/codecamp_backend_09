// @UseGuards(AuthGuard('Auth'))  이것이 실행될 것

import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { Strategy } from 'passport-jwt';

export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'refresh') {
  // 검사부분 -> 실패시 user.resolver.ts -> @UseGuards(AuthGuard('Auth')) 에러 / 성공시 validate 넘어감
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    //  super ? 부모 constructor 에 전달하고 싶을때 사용
    super({
      jwtFromRequest: (req) => {
        console.log(req);
        const cookie = req.headers.cookie;
        const refreshToken = cookie.replace('refreshToken=', '');
        return refreshToken;
      },
      secretOrKey: 'myRefreshKey',
      passReqToCallback: true,
    });
  }
  // 인가성공부분
  // validate ?   부모의 함수를덮어쓰기 ->오버라이딩
  async validate(req, payload) {
    console.log(payload); // {email: a@a.com, sub: jflsflsd-120fjlesf}
    const refreshToken = req.headers['cookie'].replace('refreshToken=', '');

    const checkaccessToken = await this.cacheManager.get(
      `refreshToken:${refreshToken}`,
    );
    if (checkaccessToken)
      throw new UnauthorizedException('다시 로그인해주세요 ');
    console.log(refreshToken);
    return {
      // req.user ={값이 이안에 들어감} 리턴된 값 넣어주기
      email: payload.email,
      id: payload.sub,
    };
  }
}
