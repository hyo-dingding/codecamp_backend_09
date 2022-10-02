import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }
  findOne({ email }) {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async create({ createUserInput }) {
    // DB애 카테고리 등록

    const { ...user } = createUserInput;
    const myuser = await this.userRepository.findOne({
      //이메일을 통해 중복체크하기
      where: { email: createUserInput.email },
    });
    console.log(myuser);
    if (myuser) throw new ConflictException('이미 등록된 이메일입니다.');
    const result = await this.userRepository.save({
      ...user,
    });
    console.log(result);
    return result;
  }
  update({ userId, updateUserInput }) {
    const result = this.userRepository.findOne({
      where: { id: userId },
    });
    return this.userRepository.save({
      ...result,
      id: userId,
      ...updateUserInput,
    });
  }

  async delete({ userId }) {
    const result = await this.userRepository.softDelete({ id: userId });
    return result.affected ? true : false;
  }
}
