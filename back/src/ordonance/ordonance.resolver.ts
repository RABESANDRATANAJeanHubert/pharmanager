import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdonanceService } from './ordonance.service';
import { Ordonance } from './ordonance.entity';
import { CreateOrdonanceInput } from './types/ordonance.input';
import { UpdateOrdonanceInput } from './types/ordonance.output';

@Resolver(() => Ordonance)
export class OrdonanceResolver {
  constructor(private readonly ordonanceService: OrdonanceService) {}

  @Mutation(() => Ordonance)
  createOrdonance(@Args('createOrdonanceInput') createOrdonanceInput: CreateOrdonanceInput) {
    return this.ordonanceService.create(createOrdonanceInput);
  }

  @Query(() => [Ordonance])
  ordonances() {
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
