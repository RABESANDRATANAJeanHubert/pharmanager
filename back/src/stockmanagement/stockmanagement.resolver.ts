import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { StockmanagementService } from './stockmanagement.service';
import { Stockmanagement } from './entities/stockmanagement.entity';
import { CreateStockmanagementInput } from './dto/create-stockmanagement.input';
import { UpdateStockmanagementInput } from './dto/update-stockmanagement.input';

@Resolver(() => Stockmanagement)
export class StockmanagementResolver {
  constructor(private readonly stockmanagementService: StockmanagementService) {}

  @Mutation(() => Stockmanagement)
  createStockmanagement(@Args('createStockmanagementInput') createStockmanagementInput: CreateStockmanagementInput) {
    return this.stockmanagementService.create(createStockmanagementInput);
  }

  @Query(() => [Stockmanagement], { name: 'stockmanagement' })
  findAll() {
    return this.stockmanagementService.findAll();
  }

  @Query(() => Stockmanagement, { name: 'stockmanagement' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.stockmanagementService.findOne(id);
  }

  @Mutation(() => Stockmanagement)
  updateStockmanagement(@Args('updateStockmanagementInput') updateStockmanagementInput: UpdateStockmanagementInput) {
    return this.stockmanagementService.update(updateStockmanagementInput.id, updateStockmanagementInput);
  }

  @Mutation(() => Stockmanagement)
  removeStockmanagement(@Args('id', { type: () => Int }) id: number) {
    return this.stockmanagementService.remove(id);
  }
}
