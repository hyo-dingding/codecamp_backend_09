import { UseGuards } from '@nestjs/common';
import { Args, Context, Int, Mutation, Resolver } from '@nestjs/graphql';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/types/context';
import { PointTransaction } from './entities/pointTransaction.entity';
import { PointTransactionsService } from './pointTransaction.service';

@Resolver()
export class PointTransactionsResolver {
  constructor(
    private readonly pointTransactionsService: PointTransactionsService,
  ) {}
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => PointTransaction)
  // 로그인 한사람만 결제가능
  createPointTransaction(
    @Args('impUid') impUid: string,
    @Args({ name: 'amount', type: () => Int }) amount: number,
    @Context() context: IContext,
  ) {
    const user = context.req.user;
    return this.pointTransactionsService.create({ impUid, amount, user });
  }
}
