import { Injectable } from '@nestjs/common';
import { CreateOrdonanceInput } from './types/ordonance.input';
import { UpdateOrdonanceInput } from './types/ordonance.output';
import { Ordonance } from './ordonance.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class OrdonanceService {

  constructor(@InjectRepository(Ordonance)
    private repository:Repository<Ordonance>,
  ) { }
  
  create(input: CreateOrdonanceInput) {
    return this.repository.create(input);
  }

  findAll() {
    return this.repository.find({
      order:
      {
        description: 'ASC',
        reference: 'ASC'
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} ordonance`;
  }

  update(id: number, updateOrdonanceInput: UpdateOrdonanceInput) {
    return `This action updates a #${id} ordonance`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordonance`;
  }
}
