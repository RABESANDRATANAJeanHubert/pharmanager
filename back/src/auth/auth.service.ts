import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthInput } from './types/auth.input';
import { UserService } from '../user/user.service';
import { User } from '../../src/user/user.entity';
import { PersonService } from '../person/person.service';
import { compareSync } from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private personService: PersonService,
    private userService: UserService,
    private jwtService: JwtService,
  ) { }

  async validateUser(input: AuthInput): Promise<User> {
    const person = await this.personService.findOneByEmail(input.email);

    if (!person) throw new UnauthorizedException('UserNotFound');
    const user = await this.userService.findOneByPerson(person.id);
    const isPasswordMatching = await compareSync(input.password, user.password);
    if (!isPasswordMatching) throw new UnauthorizedException('wrongPassword');
    return user;
  }
  async login(payload: number): Promise<string> {
    return this.jwtService.sign({ payload });
  }
  
}
