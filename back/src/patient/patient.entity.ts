import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';

@ObjectType()
  @Entity({name:'patients'})
export class Patient {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;
  @Field()
  @Column({ type: 'varchar' })
  lastName: String;
  @Field()
  @Column({ type: 'varchar' })
  firstName: String;
  @Field()
  @Column({ type: 'int' })
  phone: number;
}
