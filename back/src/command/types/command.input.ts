import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommandInput {

  @Field()
  createdAt: Date;
  
  @Field()
  archivedAt: Date;
}
