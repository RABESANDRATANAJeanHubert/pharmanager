import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Brackets, Repository } from 'typeorm';
import {
  IPaginationOptions,
  paginate,
  Pagination,
} from 'nestjs-typeorm-paginate';
import { PaginateUserInput } from './types/user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) { }
  
  async save(user: User): Promise<User> {
    return this.repository.save(user);
  }
  async findOneById(id: number): Promise<User> {
    return this.repository.findOne({ id });
  }

  async findOneByPerson(personId: number): Promise<User> {
    return this.repository
      .createQueryBuilder('user')
      .where('user.personId = :personId', { personId })
      .getOne();
  }
  
  async paginate(input: PaginateUserInput): Promise<Pagination<User>> {
    const keyword = `%${input.keyword}%`;
    const queryBuilder = this.repository
      .createQueryBuilder('user')
      .innerJoin('persons', 'person', 'user.personId = person.id')
      .where(
        new Brackets((qb) => {
          qb.where(`person.lastName ILIKE :keyword`, { keyword }).orWhere(
            `person.firstName ILIKE :keyword`,
            { keyword },
          );
        }),
      );
    if (input.filter.length) {
      switch (input.filter[0]) {
        case 'role':
          queryBuilder.andWhere(`user.role = ${parseInt(input.filter[1])}`);
          break;
        case 'active':
          queryBuilder.andWhere(`user.active = ${false}`);
          break;
        case 'verifiedAt':
          queryBuilder.andWhere(`user.verifiedAt IS NULL`);
          break;
      }
    }
    queryBuilder.orderBy('person.createdAt', 'DESC');

    const options: IPaginationOptions = {
      page: input.page,
      limit: input.limit,
    };
    return await paginate<User>(queryBuilder, options);
  }
}
