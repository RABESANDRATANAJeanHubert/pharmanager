
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class PersonOutput  {
  @Field(() => Int)
  id: number;
}
