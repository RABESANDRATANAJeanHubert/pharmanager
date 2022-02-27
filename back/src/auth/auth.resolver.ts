import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthInput } from './types/auth.input';
import { LoginDto } from './types/auth.output';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { GqlAuthGuard } from './jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import { CurrentUser } from './current-user-decorator';
import { StrategyType } from './types/strategy';

@Resolver(() => AuthInput)
export class AuthResolver {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Query(() => LoginDto)
  async login(@Args('input') input: AuthInput): Promise<LoginDto> {
    const user = await this.authService.validateUser(input);
    return {
      token: await this.authService.login(user.id),
      user,
    };
  }
  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  async whoAmI(@CurrentUser() strategy: StrategyType) {
    return await this.userService.findOneById(strategy.payload);
  }
}
