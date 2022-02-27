import { Injectable } from '@nestjs/common';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Injectable()
export class UnitService {
  create(createUnitInput: CreateUnitInput) {
    return 'This action adds a new unit';
  }

  findAll() {
    return `This action returns all unit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} unit`;
  }

  update(id: number, updateUnitInput: UpdateUnitInput) {
    return `This action updates a #${id} unit`;
  }

  remove(id: number) {
    return `This action removes a #${id} unit`;
  }
}
