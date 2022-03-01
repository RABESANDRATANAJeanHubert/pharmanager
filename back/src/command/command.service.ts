import { Injectable } from '@nestjs/common';

import { UpdateCommandInput } from './types/command.output';
import { InjectRepository } from '@nestjs/typeorm';
import { Command } from './command.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommandService {
  constructor(
    @InjectRepository(Command)
    private repository: Repository<Command>,
  ) { }
  
  async save(command: Command): Promise<Command> {
    return this.repository.save(command);
  }

  findAll() {
    return this.repository.find({
      order: { createdAt: 'ASC', archivedAt: 'ASC' },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} command`;
  }

  update(id: number, updateCommandInput: UpdateCommandInput) {
    return `This action updates a #${id} command`;
  }

  remove(id: number) {
    return `This action removes a #${id} command`;
  }
}
