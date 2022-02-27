import { Injectable } from '@nestjs/common';
import { CreateOrdonanceInput } from './dto/create-ordonance.input';
import { UpdateOrdonanceInput } from './dto/update-ordonance.input';

@Injectable()
export class OrdonanceService {
  create(createOrdonanceInput: CreateOrdonanceInput) {
    return 'This action adds a new ordonance';
  }

  findAll() {
    return `This action returns all ordonance`;
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
