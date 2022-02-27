import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProviderService } from './provider.service';
import { Provider } from './provider.entity';
import { CreateProviderInput } from './dto/create-provider.input';
import { UpdateProviderInput } from './dto/update-provider.input';

@Resolver(() => Provider)
export class ProviderResolver {
  constructor(private readonly providerService: ProviderService) {}

  @Mutation(() => Provider)
  createProvider(@Args('createProviderInput') createProviderInput: CreateProviderInput) {
    return this.providerService.create(createProviderInput);
  }

  @Query(() => [Provider], { name: 'provider' })
  findAll() {
    return this.providerService.findAll();
  }

  @Query(() => Provider, { name: 'provider' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.providerService.findOne(id);
  }

  @Mutation(() => Provider)
  updateProvider(@Args('updateProviderInput') updateProviderInput: UpdateProviderInput) {
    return this.providerService.update(updateProviderInput.id, updateProviderInput);
  }

  @Mutation(() => Provider)
  removeProvider(@Args('id', { type: () => Int }) id: number) {
    return this.providerService.remove(id);
  }
}
