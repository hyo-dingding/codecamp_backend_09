import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
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

    private readonly dataSource: DataSource, // db에 열결한다
  ) {}
  async create({ impUid, amount, user: _user }) {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();

    // ====================== Transaction 시작!!! =======================
    await queryRunner.startTransaction();
    // =================================================================
    try {
      // 1.  pointTransaction 테이블에 거래기록 1줄 생성

      const pointTransaction = this.pointTransactionRepository.create({
        impUid: impUid,
        amount: amount,
        user: _user,
        status: POINT_TRANSACTION_STATUS_ENUM.PAYMENT,
      });
      // await this.pointTransactionRepository.save(pointTransaction);
      await queryRunner.manager.save(pointTransaction);

      throw new Error('강제로 에러발생');

      // 2. 유저의 총돈 찾아오기 (유저테이블에 5000원을 추가하려면 그전에)
      // const user = await this.userRepository.findOne({
      //   where: { id: _user.id },
      // });

      await queryRunner.manager.findOne(User, {
        where: { id: _user.id },
      });
      // 3. 유저의 돈 업데이트
      // this.userRepository.update(
      //   { id: _user.id },
      //   { point: user.point + amount },
      // );

      const updateUser = await this.userRepository.create({
        ..._user,
        point: _user.point + amount,
      });
      await queryRunner.manager.save({
        ..._user,
        point: _user.point + amount,
      });

      // ====================== commit 성공 확정!! =======================
      await queryRunner.commitTransaction();
      // =================================================================

      // 4. 최종결과 프론트엔드에 돌려주기
      return pointTransaction;
    } catch (error) {
      console.log(error);

      // ====================== rollback 되돌리기!! =======================
      await queryRunner.rollbackTransaction();
      // =================================================================
    } finally {
      // ====================== 연결 헤제 =============================
      await queryRunner.release();
      // =================================================================
    }
  }
}
//createQueryBuilder 복잡한 쿼리 짤때 사용함 (sql쿼리문 처럼짤수있다.)
