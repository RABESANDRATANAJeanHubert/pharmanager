import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientInput {

  @Field()
  lastName: String;
  @Field()
  firstName: String;
  @Field()
  phone: number;
  
}
