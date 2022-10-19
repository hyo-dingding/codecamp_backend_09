import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('AUTH_SERVICE')
    private readonly clientAuthService: ClientProxy,

    @Inject('RESOURCE_SERVICE')
    private readonly clientResourceService: ClientProxy,
  ) {}

  @Get('/auth/login')
  login() {
    // auth-service로 트래픽 넘겨주기]
    return this.clientAuthService.send(
      { qqq: '로그인 해줘' }, // qqq는 단지 실습용 보통은 cmd:"login"
      { email: 'a@a.com', pw: '1234' },
    );
  }

  @Get('/boards')
  fetchBoard() {
    // resource-service로 트래픽 넘겨주기
    return this.clientResourceService.send({ cmd: 'fetchBoards' }, {});
  }
}
