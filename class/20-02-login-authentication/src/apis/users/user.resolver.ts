import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './user.service';
import * as bcrypt from 'bcrypt';
@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService, //
  ) {}
  @Mutation(() => User)
  async createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args({ name: 'age', type: () => Int }) age: number, // 정수형태로 변경
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    return this.usersService.create({ email, hashedPassword, name, age });
  }
}
