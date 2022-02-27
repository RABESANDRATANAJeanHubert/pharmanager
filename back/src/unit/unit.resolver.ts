import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UnitService } from './unit.service';
import { Unit } from './entities/unit.entity';
import { CreateUnitInput } from './dto/create-unit.input';
import { UpdateUnitInput } from './dto/update-unit.input';

@Resolver(() => Unit)
export class UnitResolver {
  constructor(private readonly unitService: UnitService) {}

  @Mutation(() => Unit)
  createUnit(@Args('createUnitInput') createUnitInput: CreateUnitInput) {
    return this.unitService.create(createUnitInput);
  }

  @Query(() => [Unit], { name: 'unit' })
  findAll() {
    return this.unitService.findAll();
  }

  @Query(() => Unit, { name: 'unit' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.unitService.findOne(id);
  }

  @Mutation(() => Unit)
  updateUnit(@Args('updateUnitInput') updateUnitInput: UpdateUnitInput) {
    return this.unitService.update(updateUnitInput.id, updateUnitInput);
  }

  @Mutation(() => Unit)
  removeUnit(@Args('id', { type: () => Int }) id: number) {
    return this.unitService.remove(id);
  }
}
