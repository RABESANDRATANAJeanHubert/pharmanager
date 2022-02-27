import { InputType, Int, Field } from '@nestjs/graphql';
import { type } from 'os';

@InputType()
export class AuthInput {
  @Field()
  email: string;
  @Field()
  password: string;
}
