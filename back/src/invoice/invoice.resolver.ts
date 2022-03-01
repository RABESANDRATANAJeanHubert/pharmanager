import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { InvoiceService } from './invoice.service';
import { Invoice } from './invoice.entity';
import { CreateInvoiceInput } from './types/invoice.input';
import { UpdateInvoiceInput } from './types/invoice.output';

@Resolver(() => Invoice)
export class InvoiceResolver {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Mutation(() => Invoice)
  async createInvoice(@Args('input') input: CreateInvoiceInput) {
    const invoice = new Invoice();
    Object.assign(invoice, input);
    this.invoiceService.save(invoice);
  }
  @Query(() => [Invoice])
  invoices() {
    return this.invoiceService.findAll();
  }
  
  @Query(() => Invoice, { name: 'invoice' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceService.findOne(id);
  }
  @Mutation(() => Invoice)
  updateInvoice(@Args('updateInvoiceInput') updateInvoiceInput: UpdateInvoiceInput) {
    return this.invoiceService.update(updateInvoiceInput.id, updateInvoiceInput);
  }
  @Mutation(() => Invoice)
  removeInvoice(@Args('id', { type: () => Int }) id: number) {
    return this.invoiceService.remove(id);
  }
}
