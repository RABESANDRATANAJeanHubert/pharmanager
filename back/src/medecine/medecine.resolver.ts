import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedecineService } from './medecine.service';
import { Medecine } from './medecine.entity';
import { CreateMedecineInput } from './types/medecine.input';
import { UpdateMedecineInput } from './types/medecine.output';

@Resolver(() => Medecine)
export class MedecineResolver {
  // access a notre service
  constructor(private medecineService: MedecineService) {}

  //Permet de creer une country
  @Mutation(() => Medecine)
  //@args  c'est un Argument
  // Dans ce cas on a un argument  input
  async createMedecine(@Args('input') input: CreateMedecineInput) {
    const medicines = new Medecine();
    Object.assign(medicines, input);
    return this.medecineService.save(medicines);
  }

// this resolver  can be update new data from medecine
// Permet de modifier un nouveau country
@Mutation(() => Medecine)
  updateMedecineInput(
    @Args('updateMedecineInput') updateMedecineInput: UpdateMedecineInput,
  ) {
    return this.medecineService.update(
      updateMedecineInput.id,
      updateMedecineInput,
    );
}

@Query(() => Medecine, { name: 'medecine' })
findOne(@Args('id', { type: () => Int }) id: number) {
  return this.medecineService.findOne(id);
}

@Mutation(() => Medecine)
removeMedecine(@Args('id', { type: () => Int }) id: number) {
  return this.medecineService.remove(id);
}
}
