import { Module, Global } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';

@Global()
@Module({
  imports:[TypeOrmModule.forFeature([Invoice])],
  providers: [InvoiceResolver, InvoiceService],
  exports: [InvoiceService]
})
  
export class InvoiceModule {}
