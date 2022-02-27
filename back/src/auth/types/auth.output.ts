import { User } from '../../user/user.entity';
import { InputType, Field, Int, PartialType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthDto {
  @Field()
  payload: number;
}

@ObjectType()
export class LoginDto {
  @Field()
  token: string;
  @Field(() => User)
  user: User;
}
