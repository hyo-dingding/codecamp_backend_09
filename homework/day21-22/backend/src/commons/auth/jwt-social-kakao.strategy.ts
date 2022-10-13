// @UseGuards(AuthGuard('Auth'))  이것이 실행될 것

import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-kakao';

export class JwtKakaoStrategy extends PassportStrategy(Strategy, 'kakao') {
  // 검사부분 -> 실패시 user.resolver.ts -> @UseGuards(AuthGuard('Auth')) 에러 / 성공시 validate 넘어감
  constructor() {
    //  super ? 부모 constructor 에 전달하고 싶을때 사용
    super({
      clientID: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
      callbackURL: process.env.KAKAO_CALLBACK_URL,
      scope: [
        'profile_nickname',
        'profile_image',
        'account_email',
        'gender',
        'age_range',
        'birthday',
      ],
    });
  }

  // 인가성공부분
  // validate ?   부모의 함수를덮어쓰기 ->오버라이딩
  validate(accessToken, refreshToken, profile) {
    const profileJson = profile._json;
    console.log(profileJson);

    const kakao_account = profileJson.kakao_account;
    console.log(profileJson);

    console.log(kakao_account);
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);

    return {
      // req.user ={값이 이안에 들어감} 리턴된 값 넣어주기
      email: kakao_account.email,

      password: '1111',
      name: profile.displayName,
      phone: '01022223333',
      age: 0,
    };
  }
}
