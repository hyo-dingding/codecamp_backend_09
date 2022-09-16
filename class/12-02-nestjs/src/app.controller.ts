import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  appService;

  // constructor(private readonly appService) {
  //   this.appService = appService;
  // }

  @Get('/product/buy')
  buyProduct = (): string => {
    return this.appService.getHello();
  };
}
