import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { DataSource, Repository } from 'typeorm';
import {
  Payment,
  PAYMENT_STATUS_ENUM,
} from '../payment/entities/payment.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class IamPortService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private readonly dataSource: DataSource,
  ) {}

  // 1. 아임포트에서 토큰받기
  async createIamPortToken() {
    const getToken = await axios.post('https://api.iamport.kr/users/getToken', {
      imp_key: process.env.IMPORT_KEY,
      imp_secret: process.env.IMPORT_SECRET,
    });
    return getToken.data.response.access_token;
  }

  // 2. 유효한 imp_uid인지 토큰을 이용해서 확인하기
  async searchPayment({ impUid }) {
    // 결제아이디 받아와서 결제정보가 있는지 확인하고 있으면 결제정보를 반환한다.
    try {
      const token = await this.createIamPortToken();

      const iamPortResult = await axios.get(
        `https://api.iamport.kr/payments/${impUid}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      return iamPortResult;
    } catch (e) {
      console.log(e);
      throw new UnprocessableEntityException('imp_uid가 유효하지 않습니다');
    }
  }

  async refund({ impUid, user: _user }) {
    // const queryRunner = await this.dataSource.createQueryRunner();
    // await queryRunner.connect();

    // await queryRunner.startTransaction('SERIALIZABLE');
    // try {
    // 결제된 impUid를 모두 찾아와서 for문 돌리기
    // const cancelPay = await queryRunner.manager.find(Payment, {
    //   where: { impUid },
    //   lock: { mode: 'pessimistic_write' },
    // });
    const cancelPay = await this.paymentRepository.find({
      where: { impUid },
    });
    let isPaymentExist = false;

    for (let i = 0; i < cancelPay.length; i++) {
      // 이미 취소된 결제라면 UnprocessableEntityException 에러를 반환
      console.log(isPaymentExist, '%%%%%%%%');

      if (cancelPay[i].status == PAYMENT_STATUS_ENUM.CANCEL)
        throw new UnprocessableEntityException('이미 환불된 상품입니다.');
      if (cancelPay[i].status == PAYMENT_STATUS_ENUM.PAYMENT)
        isPaymentExist = true;
    }
    console.log(isPaymentExist, '9999999999999');
    // status가 payment가 false 라면 에러
    if (!isPaymentExist)
      throw new UnprocessableEntityException('결제정보가 없습니다');
    else {
      // status가 payment true라면 아임포트에서 토큰을 받아오고
      const token = await this.createIamPortToken();
      console.log(token, 'qqqqqqqqq');

      const getCancelData = await axios.post(
        'https://api.iamport.kr/payments/cancel',
        { imp_uid: impUid },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      console.log(getCancelData, '!!!!!!!!!!!!');
      // 받아온 토큰과 imp_uid로 아임포트에 해당 결제 취소 요청하기
      const payment = this.paymentRepository.create({
        impUid,
        amount: getCancelData.data.response.cancel_amount,
        user: _user,
        status: PAYMENT_STATUS_ENUM.CANCEL,
      });
      const result = await this.paymentRepository.save(payment);
      console.log(result);

      // await queryRunner.manager.save(payment);
      console.log(payment, '@@@@@@@@@@@@@@@@@@');

      // const user = await queryRunner.manager.findOne(Payment, {
      //   where: { id: _user.id },
      //   lock: { mode: 'pessimistic_write' },
      // });
      const user = await this.userRepository.findOne({
        where: { id: _user.id },
      });
      // status를 취소로 업데이트하는 것이 아니라, 결제 취소로 amount는 -amount(예. -3500)로 데이터를 새로 생성하기
      await this.userRepository.update(
        { id: user.id },
        {
          point:
            Number(_user.point) -
            Number(getCancelData.data.response.cancel_amount),
        },
      );
      return payment;
    }
    // } catch (e) {
    //   console.log(e);
    //   await queryRunner.rollbackTransaction();
    // } finally {
    //   await queryRunner.release();
    // }
  }
}
