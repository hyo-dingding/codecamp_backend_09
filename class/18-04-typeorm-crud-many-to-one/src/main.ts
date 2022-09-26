// 시작점

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './commons/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Min 사용시 추가
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000); // 구버전
}
bootstrap();
