import { CreateProviderInput } from './provider.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProviderInput extends PartialType(CreateProviderInput) {
  @Field(() => Int)
  id: number;
}
