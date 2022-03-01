import { ObjectType, Field, Int } from '@nestjs/graphql';
import { CreateDateColumn, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:'invoices'})
export class Invoice {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn( {type: 'timestamp' })
  deliveryDate: Date;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  dueDate: Date;

  @Field()
  @Column({ type: 'varchar' })
  reference: String;
  
  @Field()
  @Column({ type: 'float' })
  expense: number;
}
