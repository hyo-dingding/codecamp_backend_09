import { UserService } from './user.Service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/createUser.Input';
import { UpdateUserInput } from './dto/updateUser.input';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  fetchUser(@Args('userId') userId: string) {
    return this.userService.findOne({ userId });
  }

  @Mutation(() => User)
  createUser(
    @Args('createUserInput') userInput: CreateUserInput, //
  ) {
    return this.userService.create({ userInput });
  }
  @Mutation(() => User)
  async updateUser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.userService.update({ userId, updateUserInput });
  }

  @Mutation(() => Boolean) // 삭제가됬니 안됬니?
  deleteUser(
    @Args('userId') userId: string, //
  ) {
    return this.userService.delete({ userId });
  }
}
