import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CommandService } from './command.service';
import { Command } from './command.entity';
import { CreateCommandInput } from './types/command.input';
import { UpdateCommandInput } from './types/command.output';

@Resolver(() => Command)
export class CommandResolver {
  constructor(private  commandService: CommandService) { }
  
  @Mutation(() => Command)
  async createCommand(@Args('input') input: CreateCommandInput) {
    const command = new Command();
    Object.assign(command, input);
    return this.commandService.save(command);
  }

  @Mutation(() => Command)
  updateCommand(@Args('updateCommandInput') updateCommandInput: UpdateCommandInput) {
    return this.commandService.update(updateCommandInput.id, updateCommandInput);
  }

  @Mutation(() => Command)
  removeCommand(@Args('id', { type: () => Int }) id: number) {
    return this.commandService.remove(id);
  }

  @Query(() => [Command])
  commands() {
    return this.commandService.findAll();
  }

  @Query(() => Command, { name: 'command' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.commandService.findOne(id);
  }
}
