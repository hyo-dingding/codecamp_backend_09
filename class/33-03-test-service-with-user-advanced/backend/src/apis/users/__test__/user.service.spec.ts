import { UsersService } from '../user.service';
import { Test, TestingModule } from '@nestjs/testing';
import { ConflictException } from '@nestjs/common';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';

// 나만의 미니 type orm만들기
class MockUsersRepository {
  mydb = [
    {
      email: 'a@a.com',
      password: '0000',
      name: '짱구',
      age: 8,
    },
    {
      email: 'q@q.com',
      password: '1234',
      name: '철수',
      age: 12,
    },
  ];
  findOne({ where }) {
    const users = this.mydb.filter((el) => el.email === where.email);
    if (users.length) return users[0];
    return null;
  }
  save({ email, password, name, age }) {
    this.mydb.push({ email, password, name, age });
    return { email, password, name, age };
  }
}

type MockRepository<T = any> = Partial<Record<keyof Repository<T>, jest.Mock>>;

describe('UsersService', () => {
  let usersService: UsersService;
  let usersRepository: MockRepository<User>;
  beforeEach(async () => {
    const usersModule: TestingModule = await Test.createTestingModule({
      //   import: [TypeOrmModule...],
      // controller: [],
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: MockUsersRepository,
        },
      ],
    }).compile();
    usersService = usersModule.get<UsersService>(UsersService);
    usersRepository = usersModule.get<MockRepository<User>>(
      getRepositoryToken(User),
    );
  });

  //   describe('findOne', () => {
  //     const result = usersService.findOne({});
  //     expect(result).toBe('결과');
  //   });

  describe('create', () => {
    it('이미 존재하는 이메일 검증하기!', async () => {
      const usersRepositorySpyFindOne = jest.spyOn(usersRepository, 'findOne');
      const usersRepositorySpySave = jest.spyOn(usersRepository, 'save');

      const myData = {
        email: 'a@a.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };
      try {
        await usersService.create({ ...myData });
      } catch (error) {
        expect(error).toBeInstanceOf(ConflictException);
      }

      expect(usersRepositorySpyFindOne).toBeCalledTimes(1);
      expect(usersRepositorySpySave).toBeCalledTimes(0);
    });
    it('회원 등록 잘됬는지 검증하는 로직', async () => {
      const usersRepositorySpyFindOne = jest.spyOn(usersRepository, 'findOne');
      const usersRepositorySpySave = jest.spyOn(usersRepository, 'save');

      const myData = {
        email: 'bbb@bbb.com',
        hashedPassword: '1234',
        name: '철수',
        age: 13,
      };
      const result = await usersService.create({ ...myData });
      expect(result).toStrictEqual({
        email: 'bbb@bbb.com',
        password: '1234',
        name: '철수',
        age: 13,
      });
      expect(usersRepositorySpyFindOne).toBeCalledTimes(1);
      expect(usersRepositorySpySave).toBeCalledTimes(1);
    });
  });
});
