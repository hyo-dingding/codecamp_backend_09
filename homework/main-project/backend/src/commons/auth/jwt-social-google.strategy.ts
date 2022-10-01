// @UseGuards(AuthGuard('Auth'))  이것이 실행될 것

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  // 검사부분 -> 실패시 user.resolver.ts -> @UseGuards(AuthGuard('Auth')) 에러 / 성공시 validate 넘어감
  constructor() {
    //  super ? 부모 constructor 에 전달하고 싶을때 사용
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });
  }

  // 인가성공부분
  // validate ?   부모의 함수를덮어쓰기 ->오버라이딩
  validate(accessToken, refreshToken, profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      // req.user ={값이 이안에 들어감} 리턴된 값 넣어주기
      email: profile.emails[0].value,
      password: '1111',
      name: profile.displayName,
      phone: '01022223333',
      age: 0,
    };
  }
}
