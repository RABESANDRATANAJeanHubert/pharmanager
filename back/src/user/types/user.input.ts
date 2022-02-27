import { InputType, Field, Int } from '@nestjs/graphql';
import { PersonInput } from '../../person/types/person.input';
import { PaginationInput } from '../../shared/shared.input';

@InputType()
export class CreateUserInput extends PersonInput {
  @Field()
  password: string;
}

@InputType()
export class UpdateUserInput extends PersonInput {
  @Field(() => Int)
  id: number;
  @Field(() => Int)
  role: number;
  @Field(() => Boolean)
  active: boolean;
}
@InputType()
export class UpdatePasswordInput {
  @Field()
  currentPassword: string;
  @Field()
  newPassword: string;
}

@InputType()
export class PaginateUserInput extends PaginationInput {
  @Field(() => [String])
  filter: string[]; /*[field, value]**/
}
