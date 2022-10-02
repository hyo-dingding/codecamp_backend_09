import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  create({ userInput }) {
    // DB애 카테고리 등록
    const { ...user } = userInput;
    const result = this.userRepository.save({ ...user });
    console.log(result);
    return result;
  }
}
