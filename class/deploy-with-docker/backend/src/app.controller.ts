import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/')
  qqq() {
    return '안녕하세요';
  }
}
