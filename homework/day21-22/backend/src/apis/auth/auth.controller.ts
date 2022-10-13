import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
// import { User } from '../users/entities/user.entity';

import { AuthService } from './auth.service';

interface IOAuthUser {
  user?: {
    // createUserInput: any;
    email: string;
    password: string;
    name: string;
    age: number;
    // phone: string;
  };
}

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService, //
  ) {}

  // @Get('/login/google')
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.authService.socialLogin({ req, res });
  }

  @Get('/login/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.authService.socialLogin({ req, res });
  }
  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    this.authService.socialLogin({ req, res });
  }
}
