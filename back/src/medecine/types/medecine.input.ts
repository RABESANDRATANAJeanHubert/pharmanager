import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedecineInput {
  
  @Field()
  currentSalePrice: number;

  @Field()
  currentVat: number;
}
