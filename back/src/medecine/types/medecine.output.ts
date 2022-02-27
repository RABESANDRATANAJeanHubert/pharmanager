import { CreateMedecineInput } from './medecine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedecineInput extends PartialType(CreateMedecineInput) {
  @Field(() => Int)
  id: number;
}
