import {
  ConflictException,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { IamPortService } from '../iamport/iamport.service';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/types/context';

import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';

import { PaymentService } from './payment.service';

@Resolver()
export class PaymentResolver {
  constructor(
    private readonly paymentService: PaymentService, //
    private readonly iamPortService: IamPortService,
  ) {}
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Payment)
  // 로그인 한사람만 결제가능
  async createPayment(
    @Args('impUid') impUid: string,
    @Args({ name: 'amount', type: () => Int }) amount: number,
    @Context() context: IContext,
  ) {
    const user = context.req.user;

    const checkIamPort = await this.iamPortService.searchPayment({
      impUid,
    });
    const realAmount = checkIamPort.data.response.amount;

    // 고객이 결제한 금액과 아임포트에서 받아온 금액이 다르면 에러 반환하고
    if (realAmount !== amount)
      throw new UnprocessableEntityException('결제 금액이 유효하지 않습니다.');
    else {
      // 금액이 동일하다면
      // 이미 결제 테이블에 추가된 결제건이라면 ConflictException 에러를 반환하기

      const isPaymentExist = await this.paymentService.findPaymentById({
        impUid,
        status: PAYMENT_STATUS_ENUM.PAYMENT,
      });
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@', isPaymentExist);
      if (isPaymentExist) {
        throw new ConflictException('이미 결제가 완료된 정보입니다 ');
      } else {
        return await this.paymentService.create({
          impUid,
          amount,
          user,
        });
      }
    }
  }

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => Payment)
  async cancelPayment(
    @Args('impUid') impUid: string,
    @Context() context: IContext,
  ) {
    const user = context.req.user;
    // accessToken 받아오기
    return this.iamPortService.refund({ impUid, user });

    // accessToken 사용하여 결제 내역 조회
    const checkIamPort = await this.iamPortService.searchPayment({
      impUid,
    });

    // 결제 아이디/결제금액 조회
    const realAmount = checkIamPort.data.response.amount;
  }
}

// 결제 아이디로 결제내역 조회
// 결제 상태가 CANCLE이 아니면 취소 요청
// 결제 상태가 CANCLE이면 오류문구
