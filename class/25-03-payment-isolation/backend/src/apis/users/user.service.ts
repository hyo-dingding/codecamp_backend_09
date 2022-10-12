import { Repository } from 'typeorm';
import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findOne({ email }) {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async create({ email, hashedPassword: password, name, age }) {
    const user = await this.userRepository.findOne({ where: { email } });
    if (user) throw new ConflictException('이미 등록된 이메일입니다.');
    //   throw new HttpException('이미 등록된 이메일입니다.', HttpStatus.CONFLICT); 이렇게도 가능

    return this.userRepository.save({
      email,
      password,
      name,
      age,
    });
  }
}

//  hashedPassword: password, 매개변수에서 받은 데이터에서 이름 변경 가능.
