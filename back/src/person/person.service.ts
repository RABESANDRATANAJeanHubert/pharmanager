import { Injectable } from '@nestjs/common';
import { Person } from './person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private repository: Repository<Person>,
  ) { }
  async save(person: Person): Promise<Person> {
    return this.repository.save(person);
  }
  async findOneByPhone(phone: string): Promise<Person> {
    return this.repository.findOne({ phone });
  }
  async findOneByEmail(email: string): Promise<Person> {
    return this.repository.findOne({ email });
  }
  async findOneById(id: number): Promise<Person> {
    return this.repository.findOne(id);
  }
  async findOneByContact(email: string, phone: string): Promise<Person> {
    return this.repository.findOne({
      where: [{ email }, { phone }],
    });
  }

}
