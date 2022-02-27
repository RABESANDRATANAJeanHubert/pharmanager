import { Injectable } from '@nestjs/common';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';

@Injectable()
export class ProviderService {
  create(createProviderInput: CreateProviderInput) {
    return 'This action adds a new provider';
  }

  findAll() {
    return `This action returns all provider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderInput: UpdateProviderInput) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
