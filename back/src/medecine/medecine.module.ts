import { Module, Global } from '@nestjs/common';
import { MedecineService } from './medecine.service';
import { MedecineResolver } from './medecine.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecine } from './medecine.entity';



@Global()
@Module({
  imports:[TypeOrmModule.forFeature([Medecine])],
  providers: [MedecineResolver, MedecineService]
})
export class MedecineModule {}
