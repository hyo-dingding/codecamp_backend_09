import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  // @Mutation(() => String)
  @Query(() => String)
  login() {
    return 'login 성공';
  }
}
