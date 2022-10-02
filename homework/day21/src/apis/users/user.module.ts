import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserResolver } from './user.resolver';

import { JwtAccessStrategy } from 'src/commons/auth/jwt-access.strategy';
import { UserService } from './user.Service';
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    JwtAccessStrategy, //
    UserResolver, //
    UserService,
  ],
})
export class UserModule {}
