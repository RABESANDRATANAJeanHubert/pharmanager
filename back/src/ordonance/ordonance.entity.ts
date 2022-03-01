import { ObjectType, Field, Int } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@ObjectType()
@Entity({name:'ordonances'})
export class Ordonance {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ type: 'varchar' })
  reference: String;
  @Field()
  @Column({ type: 'varchar' })
  description: String;
}
