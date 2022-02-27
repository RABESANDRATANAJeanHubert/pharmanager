import { Field, ObjectType } from '@nestjs/graphql';
import { IPaginationMeta } from 'nestjs-typeorm-paginate';

@ObjectType()
export class Meta implements IPaginationMeta {
  @Field()
  itemCount: number;
  @Field({ nullable: true })
  totalItems?: number;
  @Field()
  itemsPerPage: number;
  @Field({ nullable: true })
  totalPages?: number;
  @Field()
  currentPage: number;
}
