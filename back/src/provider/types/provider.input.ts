import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProviderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  name: string;

  @Field()
  phone: string;

  @Field()
  address: string;

  @Field()
  email: string;
  
  @Field()
  logo: string;
}
