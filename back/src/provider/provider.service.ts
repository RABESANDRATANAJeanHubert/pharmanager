import { Injectable } from '@nestjs/common';
import { CreateProviderInput } from './types/provider.input';
import { UpdateProviderInput } from './types/provider.output';

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
