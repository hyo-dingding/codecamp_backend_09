// @UseGuards(AuthGuard('Auth'))  이것이 실행될 것

import { CACHE_MANAGER, Inject, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Cache } from 'cache-manager';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  // 검사부분 -> 실패시 user.resolver.ts -> @UseGuards(AuthGuard('Auth')) 에러 / 성공시 validate 넘어감
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {
    //  super ? 부모 constructor 에 전달하고 싶을때 사용

    super({
      //  검사로직 작성 (부모생성자에 들어가서 검사 실행됨)
      //   jwtFromRequest: (req) => {
      //     console.log(req);

      //     const temp = req.hearders.authorization; // Bearer sdfjsljflsjflsjlsldfjs
      //     const accessToken = temp.toLowercase().replace('bearer', '');
      //     return accessToken;
      //   },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'myAccessKey',
      passReqToCallback: true,
    });
  }
  // 인가성공부분
  // validate ?   부모의 함수를덮어쓰기 ->오버라이딩
  async validate(req, payload) {
    console.log(payload, req); // {email: a@a.com, sub: jflsflsd-120fjlesf}
    // accessToken 뽑아와서
    const accessToken = req.headers['authorization'].replace('Bearer ', '');

    const checkaccessToken = await this.cacheManager.get(
      `accessToken:${accessToken}`,
    );
    if (checkaccessToken)
      throw new UnauthorizedException('다시 로그인해주세요 ');
    console.log(accessToken);

    return {
      // req.user ={값이 이안에 들어감} 리턴된 값 넣어주기
      email: payload.email,
      id: payload.sub,
    };
  }
}
