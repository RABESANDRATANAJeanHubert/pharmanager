import { Injectable } from '@nestjs/common';
import { CreatePatientInput } from './types/patient.input';
import { UpdatePatientInput } from './types/patient.output';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {

  constructor(
    @InjectRepository(Patient)
    private repository: Repository<Patient>,
  ) { }

  async save(patient: Patient): Promise<Patient>{
    return this.repository.save(patient)
  }
  
  findAll() {
    return this.repository.find({order:{firstName:'ASC',lastName:'ASC',phone:'ASC'}})
  }

  findByPhone(phone: number) {
    return this.repository.findOne({where:{phone:'phone'}});
  }

  update(id: number, updatePatientInput: UpdatePatientInput) {
    return `This action updates a #${id} patient`;
  }

  remove(id: number) {
    return `This action removes a #${id} patient`;
  }
}
