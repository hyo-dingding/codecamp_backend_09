import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import {
  PointTransaction,
  POINT_TRANSACTION_STATUS_ENUM,
} from './entities/pointTransaction.entity';

@Injectable()
export class PointTransactionsService {
  constructor(
    @InjectRepository(PointTransaction)
    private readonly pointTransactionRepository: Repository<PointTransaction>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async create({ impUid, amount, user: _user }) {
    // 1.  pointTransaction 테이블에 거래기록 1줄 생성
    // 빈객체 생성해서 넣어주기
    const pointTransaction = this.pointTransactionRepository.create({
      impUid,
      amount,
      user: _user,
      status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
    });
    await this.pointTransactionRepository.save(pointTransaction);

    // 2. 유저의 총돈 찾아오기 (유저테이블에 5000원을 추가하려면 그전에)
    const user = await this.userRepository.findOne({ where: { id: _user.id } });
    // 3. 유저의 돈 업데이트
    this.userRepository.update(
      { id: _user.id },
      { point: user.point + amount },
    );
    // 4. 최종결과 프론트엔드에 돌려주기
    return pointTransaction;
  }
}
