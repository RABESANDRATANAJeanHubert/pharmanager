import { Injectable } from '@nestjs/common';
import { CreateInvoiceInput } from './types/invoice.input';
import { UpdateInvoiceInput } from './types/invoice.output';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private repository: Repository<Invoice>,
  ) { }
  
  save(invoice: Invoice): Promise<Invoice>{
    return this.repository.save(invoice);
  }
    
  findAll() {
    return this.repository.find(
      { order: { expense: 'ASC', dueDate: 'ASC', reference: 'ASC', deliveryDate: 'ASC' } });
  }

  findOne(id: number) {
    return `This action returns a #${id} invoice`;
  }

  update(id: number, updateInvoiceInput: UpdateInvoiceInput) {
    return `This action updates a #${id} invoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} invoice`;
  }
}
