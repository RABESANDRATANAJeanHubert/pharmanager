import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Person } from '../person/person.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';


@ObjectType()
@Entity({name:'users'})
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ type: 'varchar', length: 60 })
  password: string;

  @Field({ nullable: true })
  @Column({ type: 'timestamp', nullable: true })
  verifiedAt?: Date;

  @Field()
  @Column({ type: 'int', width: 1, default: 0 })
  role: number;

  @Field()
  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Field(() => Person,)
  @OneToOne(() => Person, (person) => person.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  
  @JoinColumn()
  person: Person;

  @RelationId((user: User) => user.person)
  personId: number;

  // @OneToMany(() => Area, (area) => area.user, { onDelete: 'CASCADE' })
  // areas: Area[];

  // @OneToMany(() => LivingBeing, (livingBeing) => livingBeing.user, {
  //   onDelete: 'CASCADE',
  // })
  // livingBeing: LivingBeing[];
  
}
