import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService, //
    private readonly usersService: UsersService,
  ) {}
  setRefreshToken({ user, res }) {
    const refreshToken = this.jwtService.sign(
      { email: user.email, sub: user.id }, //
      { secret: 'myRefreshKey', expiresIn: '2w' },
    );

    res.setHeader('Set-Cookie', `refreshToken=${refreshToken}; path=/;`);
  }

  getAccessToken({ user }) {
    return this.jwtService.sign(
      { email: user.email, sub: user.id }, // 저장하고 싶은데이터(중요한데이터 저장하면안됌)
      { secret: 'myAccessKey', expiresIn: '1h' }, //서명하는부분
    );
  }
  async socialLogin({ req, res }) {
    // 가입확인
    let user = await this.usersService.findOne({ email: req.user.email });

    // 회원가입
    if (!user) {
      const { password, ...rest } = req.user;
      const createUserInput = { ...rest, hashedPassword: password };
      user = await this.usersService.create({ createUserInput });
    }

    // 로그인
    this.setRefreshToken({ user, res });
    console.log(user);
    res.redirect(
      'http://localhost:5501/homework/main-project/frontend/login/index.html',
    );
  }
}
