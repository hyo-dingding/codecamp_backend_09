import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UsersService } from '../users/user.service';
import { AuthService } from './auth.service';

interface IOAuthUser {
  user?: {
    email: string;
    hashedPassword: string;
    name: string;
    age: number;
  };
}

@Controller()
export class AuthController {
  constructor(
    private readonly usersService: UsersService, //
    private readonly authService: AuthService,
  ) {}
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    req.user;
    // 1. 회원조회
    let user = await this.usersService.findOne({ email: req.user.email });
    // 2. 회원가입이 안되있다면 자동회원가입
    if (!user) user = await this.usersService.create({ ...req.user });

    // 3. 회원가입이 되있다면? 로그인(구글상관없이 우리것으로 로그인 시키기)
    // -> refreshToken, accessToken 만들어서 frontend에 추가
    this.authService.setRefreshToken({ user, res });
    // accessToken 안만듬. redirect 페이지 이동 다시 내페이지로 다시옴.
    res.redirect(
      'http://localhost:5500/class/21-03-login-google/frontend/social-login.html',
    );
  }
}
//req.user.email  구글이 준이메일
