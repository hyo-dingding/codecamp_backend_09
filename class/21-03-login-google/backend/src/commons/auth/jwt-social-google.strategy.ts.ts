// @UseGuards(AuthGuard('Auth'))  이것이 실행될 것

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // 검사부분 -> 실패시 user.resolver.ts -> @UseGuards(AuthGuard('Auth')) 에러 / 성공시 validate 넘어감
  constructor() {
    //  super ? 부모 constructor 에 전달하고 싶을때 사용
    super({
      clientID: '구글에서 제공받은 아이디',
      clientSecret: '구글에서 제공받은 비밀key',
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'], //네이버 독스나 구글독스에 있음.
    });
  }
  // 인가성공부분
  // validate ?   부모의 함수를덮어쓰기 ->오버라이딩
  validate(accessToken, refreshToken, profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      email: profile.emails[0].value,
      hashedPassword: '1234',
      name: profile.displayName,
      age: 0,
    };
  }
}
