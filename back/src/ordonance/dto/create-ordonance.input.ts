import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrdonanceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
