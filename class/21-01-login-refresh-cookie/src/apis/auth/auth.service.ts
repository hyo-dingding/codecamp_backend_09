import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
  ) {}

  async setRefreshToken({ user, res }) {
    const refreshToken = await this.jwtService.sign(
      { email: user.email, sub: user.id }, // 저장하고 싶은데이터(중요한데이터 저장하면안됌)
      { secret: 'myRefreshKey', expiresIn: '2w' }, //서명하는부분
    );
    // 개발환경
    res.setHeader('Set-Cookie', `refreshToken= ${refreshToken}`);
    // 배포환경
    // res.setHeader(  'Set-Cookie', `refreshToken=${refreshToken}; path=/; domain=.mybacksite.com; SameSite=None; Secure; httpOnly;`, );
    // res.setHeader('Access-Control-Allow-Origin', 'https://myfrontsite.com');프론트 도메인사이트임
  }
  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, // 저장하고 싶은데이터(중요한데이터 저장하면안됌)
      { secret: 'myAccessKey', expiresIn: '1h' }, //서명하는부분
    );
  }
}
