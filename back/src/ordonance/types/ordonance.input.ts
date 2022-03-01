import { InputType, Int, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType()

export class CreateOrdonanceInput {
  @Field()
  reference: String;
  @Field()
  description: String;
}
