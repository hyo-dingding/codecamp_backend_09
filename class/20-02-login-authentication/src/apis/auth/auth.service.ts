import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
  ) {}

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, // 저장하고 싶은데이터(중요한데이터 저장하면안됌)
      { secret: 'myAccessKey', expiresIn: '1h' }, //서명하는부분
    );
  }
}
