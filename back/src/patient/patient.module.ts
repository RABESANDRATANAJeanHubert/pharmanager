import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientResolver } from './patient.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './patient.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Patient])],
  providers: [PatientResolver, PatientService],
  exports:[PatientService]
})
export class PatientModule {}
