import { HttpException, UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/types/context';
import { PointTransaction } from './entities/pointTransaction.entity';
import { PointTransactionsService } from './pointTransaction.service';

import { IamportService } from '../iamport/iamport.service';

@Resolver()
export class PointTransactionsResolver {
  constructor(
    private readonly pointTransactionsService: PointTransactionsService,
    private readonly iamportService: IamportService,
  ) {}

  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => PointTransaction)
  // 로그인 한사람만 결제가능
  async createPointTransaction(
    @Args('impUid') impUid: string,
    @Args({ name: 'amount', type: () => Int }) amount: number,
    @Context() context: IContext,
  ) {
    // 검증로직들!
    // 아임포트에 요청해서 결제완료 기록이 들어왔는지 확인한다.
    const token = await this.iamportService.getToken();
    this.iamportService.checkPaid({ impUid, token });

    const user = context.req.user;
    return this.pointTransactionsService.create({ impUid, amount, user });
  }
}
