import { CreateStockmanagementInput } from './create-stockmanagement.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStockmanagementInput extends PartialType(CreateStockmanagementInput) {
  @Field(() => Int)
  id: number;
}
