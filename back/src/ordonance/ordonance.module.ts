import { Module } from '@nestjs/common';
import { OrdonanceService } from './ordonance.service';
import { OrdonanceResolver } from './ordonance.resolver';

@Module({
  providers: [OrdonanceResolver, OrdonanceService]
})
export class OrdonanceModule {}
