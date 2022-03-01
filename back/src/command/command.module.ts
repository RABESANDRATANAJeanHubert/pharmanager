import { Module, Global } from '@nestjs/common';
import { CommandService } from './command.service';
import { CommandResolver } from './command.resolver';
import { Command } from './command.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports:[TypeOrmModule.forFeature([Command])],
  providers: [CommandResolver, CommandService],
  exports:[CommandService]
})
export class CommandModule {}
