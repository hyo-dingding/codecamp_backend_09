import {
  ConflictException,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { IamPortService } from '../iamport/iamport.service';

import { User } from '../users/entities/user.entity';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly iamPortService: IamPortService,

    private readonly dataSource: DataSource,
  ) {}
  // paymentRepository 에서 impUid 가져오는 로직 추가
  async findPaymentById({ impUid, status }) {
    return await this.paymentRepository.findOne({ where: { impUid, status } });
  }

  async create({ impUid, amount, user: _user }) {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();

    //  Transaction 시작
    await queryRunner.startTransaction('SERIALIZABLE');
    try {
      // 아임포트에서 받아온 정보를 amount 만 뽑아서 realAmount 담고

      // const checkIamPort = await this.iamPortService.searchPayment({
      //   impUid,
      // });
      //   return checkIamPort;
      // } catch (e) {
      //   console.log(e);
      // }
      // const realAmount = checkIamPort.data.response.amount;

      // // 고객이 결제한 금액과 아임포트에서 받아온 금액이 다르면 에러 반환하고
      // if (realAmount !== amount)
      //   throw new UnprocessableEntityException(
      //     '결제 금액이 유효하지 않습니다.',
      //   );
      // else {
      //   // 금액이 동일하다면
      //   // 이미 결제 테이블에 추가된 결제건이라면 ConflictException 에러를 반환하기
      //   const isPaymentExist = await this.findPaymentById({ impUid });

      //   if (isPaymentExist != null)
      //     throw new ConflictException('이미 결제가 완료된 정보입니다 ');

      // 결제된 적이 없었다면
      // DB에 생성
      const payment = this.paymentRepository.create({
        impUid: impUid,
        amount: amount,
        user: _user,
        status: PAYMENT_STATUS_ENUM.PAYMENT,
      });
      // await this.paymentRepository.save(payment);
      await queryRunner.manager.save(payment);
      //  유저의 총돈 찾아오기
      const user = await queryRunner.manager.findOne(User, {
        where: { id: _user.id },
        lock: { mode: 'pessimistic_write' },
      });

      // const user = await this.userRepository.findOne({
      //   where: { id: _user.id },
      // });
      // 3. 유저의 돈 업데이트
      await queryRunner.manager.update(
        User,
        { id: user.id },
        { point: user.point + amount },
      );
      console.log(_user.point);
      // ====================== commit 성공 확정!! =======================
      await queryRunner.commitTransaction();

      // 4. 최종결과 프론트엔드에 돌려주기
      return payment;
    } catch (e) {
      console.log(e);
      // ====================== rollback 되돌리기!! =======================
      await queryRunner.rollbackTransaction();
    } finally {
      // ====================== 연결 헤제 =============================
      await queryRunner.release();
    }
  }
}
