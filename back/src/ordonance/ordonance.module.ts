import { Module, Global } from '@nestjs/common';
import { OrdonanceService } from './ordonance.service';
import { OrdonanceResolver } from './ordonance.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ordonance } from './ordonance.entity';

@Global()
@Module({
  imports:[TypeOrmModule.forFeature([Ordonance])],
  providers: [OrdonanceResolver, OrdonanceService],
  exports:[OrdonanceService]
})
  
export class OrdonanceModule {}
