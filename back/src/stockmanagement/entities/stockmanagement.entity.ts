import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stockmanagement {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
