import { CreateOrdonanceInput } from './create-ordonance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateOrdonanceInput extends PartialType(CreateOrdonanceInput) {
  @Field(() => Int)
  id: number;
}
