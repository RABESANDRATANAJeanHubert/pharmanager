import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdonanceService } from './ordonance.service';
import { Ordonance } from './entities/ordonance.entity';
import { CreateOrdonanceInput } from './dto/create-ordonance.input';
import { UpdateOrdonanceInput } from './dto/update-ordonance.input';

@Resolver(() => Ordonance)
export class OrdonanceResolver {
  constructor(private readonly ordonanceService: OrdonanceService) {}

  @Mutation(() => Ordonance)
  createOrdonance(@Args('createOrdonanceInput') createOrdonanceInput: CreateOrdonanceInput) {
    return this.ordonanceService.create(createOrdonanceInput);
  }

  @Query(() => [Ordonance], { name: 'ordonance' })
  findAll() {
    return this.ordonanceService.findAll();
  }

  @Query(() => Ordonance, { name: 'ordonance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.ordonanceService.findOne(id);
  }

  @Mutation(() => Ordonance)
  updateOrdonance(@Args('updateOrdonanceInput') updateOrdonanceInput: UpdateOrdonanceInput) {
    return this.ordonanceService.update(updateOrdonanceInput.id, updateOrdonanceInput);
  }

  @Mutation(() => Ordonance)
  removeOrdonance(@Args('id', { type: () => Int }) id: number) {
    return this.ordonanceService.remove(id);
  }
}
