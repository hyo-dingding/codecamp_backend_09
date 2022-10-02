import { UserService } from './user.Service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from './entities/user.entity';
import { UserInput } from './dto/userInput';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}
  @Mutation(() => User)
  createUser(
    @Args('userInput') userInput: UserInput, //
  ) {
    return this.userService.create({ userInput });
  }
}
