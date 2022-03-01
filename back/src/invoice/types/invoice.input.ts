import { InputType, Int, Field } from '@nestjs/graphql';

// Input data type is using when you enter new data in field 
// I mean we are using Input type for inserting new data into front
@InputType()
export class CreateInvoiceInput {
  @Field()
  deliveryDate: Date;
  @Field()
  dueDate: Date;
  @Field()
  reference: String;
  @Field()
  expense: String;
}
