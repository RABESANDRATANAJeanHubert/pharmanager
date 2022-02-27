import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStockmanagementInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
