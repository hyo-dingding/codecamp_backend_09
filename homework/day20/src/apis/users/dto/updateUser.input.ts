import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserInput } from './createUser.Input';
@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {}
