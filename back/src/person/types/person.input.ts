import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PersonInput {
  @Field()
  lastName: string;

  @Field()
  firstName: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  gender: 0 | 1;
  
}
