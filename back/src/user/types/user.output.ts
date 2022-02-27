import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../user.entity';
import { Meta } from '../../shared/shared.dto';

@ObjectType()
export class UserPagination {
  @Field(() => [User])
  items: User[];

  @Field(() => Meta)
  meta: Meta;
}
