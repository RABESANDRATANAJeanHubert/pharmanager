import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'medecines' })
export class Medecine {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'float' })
  currentSalePrice: number;

  @Field()
  @Column({ type: 'float'})
  currentVat: number;
}
