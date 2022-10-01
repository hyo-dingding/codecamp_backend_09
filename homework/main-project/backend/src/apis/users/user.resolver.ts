import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';
// import { CreateUserInput } from './dto/createUser.Input';
import { UpdateUserInput } from './dto/updateUser.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { CreateUserInput } from './dto/createUser.Input';
import { UsersService } from './user.service';

@Resolver()
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [User])
  fetchUsers(@Context() context: any) {
    console.log(context.req.user);

    // return this.userService.findAll();
    return 'fetchUsers!';
  }
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => String)
  fetchLoginUser(
    @Context() context: any, //
    // @Args('userId') email: string,
  ) {
    console.log(context.req.user);
    // return this.userService.findOne({ email });
    return 'fetchUser 성공!';
  }
  // fetchLoginUser

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
    // @Args('email') email: string,
    // @Args('password') password: string,
    // @Args('name') name: string,
    // @Args('phone') phone: string,
  ) {
    createUserInput.password = await bcrypt.hash(createUserInput.password, 10);
    console.log(createUserInput.password);

    console.log(createUserInput);
    return this.usersService.create({ createUserInput });
  }
  @Mutation(() => User)
  async updateUserPwd(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update({ userId, updateUserInput });
  }

  @Mutation(() => Boolean) // 삭제가됬니 안됬니?
  deleteLoginUser(
    @Args('userId') userId: string, //
  ) {
    return this.usersService.delete({ userId });
  }
}
