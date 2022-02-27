import { Module } from '@nestjs/common';
import { StockmanagementService } from './stockmanagement.service';
import { StockmanagementResolver } from './stockmanagement.resolver';

@Module({
  providers: [StockmanagementResolver, StockmanagementService]
})
export class StockmanagementModule {}
