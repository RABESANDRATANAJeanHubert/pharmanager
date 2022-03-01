import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PatientService } from './patient.service';
import { Patient } from './patient.entity';
import { CreatePatientInput } from './types/patient.input';
import { UpdatePatientInput } from './types/patient.output';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private readonly patientService: PatientService) {}

  @Mutation(() => Patient)
  async createPatient(@Args('input') input: CreatePatientInput) {
    const patient = new Patient();
    Object.assign(patient, input);
    return this.patientService.save(patient);
  }
  
  @Mutation(() => Patient)
  updatePatient(@Args('updatePatientInput') updatePatientInput: UpdatePatientInput) {
    return this.patientService.update(updatePatientInput.id, updatePatientInput);
  }
  
  @Mutation(() => Patient)
  removePatient(@Args('id', { type: () => Int }) id: number) {
    return this.patientService.remove(id);
  }

  @Query(() => [Patient])
  patients(){
    return this.patientService.findAll();
  }

  @Query(() => Patient, { name: 'patient' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.patientService.findByPhone(id);
  }


}
