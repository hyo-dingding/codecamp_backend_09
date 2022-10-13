import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/user.service';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

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
    let user = await this.usersService.findOne({ email: req.user.email });
    if (!user) {
      const createUserInput = { ...req.user };
      createUserInput.password = await bcrypt.hash(
        createUserInput.password,
        10,
      );
      user = await this.usersService.create({ createUserInput });
    }
    this.setRefreshToken({ user, res });
    console.log(user);
    res.redirect(
      'http://localhost:5501/homework/main-project/frontend/login/index.html',
    );
  }
  // =============
  // async blackList({ context }) {
  //   const accessToken = await context.req.headers.authorization.replace(
  //     'Bearer',
  //     '',
  //   );

  //   const refreshToken = context.req.headers.cookie.replace(
  //     'refreshToken=',
  //     '',
  //   );
  // }
}
