import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
// import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/user.service';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';

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
    private readonly usersService: UsersService, //
  ) {}

  // @Get('/login/google')
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    let user = await this.usersService.findOne({ email: req.user.email });
    if (!user) {
      const createUserInput = { ...req.user };
      createUserInput.password = await bcrypt.hash(
        createUserInput.password,
        10,
      );
      user = await this.usersService.create({ createUserInput });
    }
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/homework/main-project/frontend/login/index.html',
    );
  }

  @Get('/login/naver')
  @UseGuards(AuthGuard('naver'))
  async loginNaver(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    let user = await this.usersService.findOne({ email: req.user.email });
    if (!user) {
      const createUserInput = { ...req.user };
      createUserInput.password = await bcrypt.hash(
        createUserInput.password,
        10,
      );
      console.log('user');

      user = await this.usersService.create({ createUserInput });
    }
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/homework/main-project/frontend/login/index.html',
    );
  }
  @Get('/login/kakao')
  @UseGuards(AuthGuard('kakao'))
  async loginKakao(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    let user = await this.usersService.findOne({ email: req.user.email });
    if (!user) {
      const createUserInput = { ...req.user };
      createUserInput.password = await bcrypt.hash(
        createUserInput.password,
        10,
      );
      console.log('user');

      user = await this.usersService.create({ createUserInput });
    }
    this.authService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/homework/main-project/frontend/login/index.html',
    );
  }
}
