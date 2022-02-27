import {
  Args,
  Mutation,
  Query,
  ResolveField,
  Resolver,
  Root,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';
import {
  CreateUserInput,
  PaginateUserInput,
  UpdatePasswordInput,
  UpdateUserInput,
} from './types/user.input';
import { Person } from '../person/person.entity';
import { compareSync, hashSync } from 'bcrypt';
import { GraphQLUpload } from 'graphql-upload';
import { Upload } from '../shared/shared.input';
import { PersonService } from '../person/person.service';
import { GqlAuthGuard  } from '../auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { uniqId, upload } from '../utils';
import { CurrentUser } from '../auth/current-user-decorator';
import { StrategyType } from '../auth/types/strategy';
import { UserPagination } from './types/user.output';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private personService: PersonService,
  ) {}

  @Mutation(() => User)
  async createUser(
    @Args({ name: 'avatar', type: () => GraphQLUpload }) file: Upload,
    @Args({ name: 'input', type: () => CreateUserInput })
    input: CreateUserInput,
  ): Promise<User> {
    const { password, ...res } = input;
    let person = await this.personService.findOneByContact(
      res.email,
      res.phone,
    );
    if (person)
      throw new Error(person.email === res.email ? 'emailExist' : 'phoneExist');
    const user = new User();
    user.password = hashSync(password, 10);
    person = new Person();
    user.id = await uniqId('Person');
    Object.assign(person, res);
    const { filename } = await upload(file, 'avatars/persons', user.id);
    person.avatar = filename;
    user.person = person;
    return this.userService.save(user);
  }
  @UseGuards(GqlAuthGuard )
  @Mutation(() => User)
  async updateUser(@Args('input') input: UpdateUserInput): Promise<User> {
    const { id, role, active, ...personInput } = input;
    const user = await this.userService.findOneById(id);
    user.role = role;
    user.active = active;
    const person = await this.personService.findOneById(user.personId);
    Object.assign(person, personInput);
    user.person = person;
    return this.userService.save(user);
  }
  @UseGuards(GqlAuthGuard )
  @Mutation(() => User, { nullable: true })
  async updatePassword(
    @CurrentUser() strategy: StrategyType,
    @Args('input') input: UpdatePasswordInput,
  ): Promise<User> {
    const user = await this.userService.findOneById(strategy.payload);
    const matched = await compareSync(input.currentPassword, user.password);
    if (!matched) return null;
    user.password = hashSync(input.newPassword, 10);
    user.person = await this.personService.findOneById(user.personId);
    return this.userService.save(user);
  }
  @Query(() => UserPagination)
  async paginateUsers(
    @Args('input') input: PaginateUserInput,
  ): Promise<UserPagination> {
    return this.userService.paginate(input);
  }
  @ResolveField(() => Person)
  async person(@Root() user: User): Promise<Person> {
    return this.personService.findOneById(user.personId);
  }
}
