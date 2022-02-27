import { Injectable } from '@nestjs/common';
import { CreateStockmanagementInput } from './dto/create-stockmanagement.input';
import { UpdateStockmanagementInput } from './dto/update-stockmanagement.input';

@Injectable()
export class StockmanagementService {
  create(createStockmanagementInput: CreateStockmanagementInput) {
    return 'This action adds a new stockmanagement';
  }

  findAll() {
    return `This action returns all stockmanagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockmanagement`;
  }

  update(id: number, updateStockmanagementInput: UpdateStockmanagementInput) {
    return `This action updates a #${id} stockmanagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockmanagement`;
  }
}
