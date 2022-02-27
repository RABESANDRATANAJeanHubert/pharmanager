import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ordonance {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
