import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { JwtAccessStrategy } from 'src/commons/auth/jwt-access.strategy';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    JwtAccessStrategy, //
    UsersResolver, //
    UsersService,
  ],
})
export class UsersModule {}
