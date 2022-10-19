import { Controller, Get } from '@nestjs/common';

import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ qqq: '로그인 해줘' })
  login(data) {
    // 실제 로그인 하기
    console.log(data);

    return 'login 성공';
  }

  logout() {
    //
  }
  restoreAccessToken() {
    //
  }
}
