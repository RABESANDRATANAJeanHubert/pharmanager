import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'providers'})
export class Provider {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field(() => Int, { description: 'Example field (placeholder)' })
  @Column({type:'varchar'})
  name: string;

  @Field()
  @Column({ type: 'varchar' })
  phone: string;

  @Field()
  @Column({ type: 'varchar' })
  address: string;

  @Field()
  @Column({ type: 'varchar' })
  email: string;
  
  @Field()
  @Column({ type: 'varchar'})
  logo: string;
}
