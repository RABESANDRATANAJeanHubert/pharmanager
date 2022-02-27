import { Field, InputType } from '@nestjs/graphql';
import { Stream } from 'stream';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';

@InputType()
export class PaginationInput implements IPaginationOptions {
  @Field({ nullable: true })
  keyword?: string;

  @Field()
  page: number;

  @Field()
  limit: number;
}

@InputType()
export class Upload {
  @Field()
  filename: string;

  @Field()
  mimetype: string;

  @Field()
  encoding: string;

  @Field(() => Stream)
  createReadStream: () => Stream;
}
