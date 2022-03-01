import { Injectable } from '@nestjs/common';
import { UpdateMedecineInput } from './types/medecine.output';
import { Medecine } from './medecine.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MedecineService {
  constructor(
    @InjectRepository(Medecine)
    private repository: Repository<Medecine>,
  ) { }
  async save(medecine: Medecine): Promise<Medecine> {
    return this.repository.save(medecine);
  }
  findAll() {
    return this.repository.find({
      order: { currentSalePrice: 'ASC', currentVat: 'ASC' },
    });
  }
  findOne(id: number) {
    return `This action returns a #${id} medecine`;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateMedecineInput: UpdateMedecineInput) {
    return `This action updates a #${id} medecine`;
  }
  remove(id: number) {
    return `This action removes a #${id} medecine`;
  }
}
