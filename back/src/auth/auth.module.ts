import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../configuration/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [JwtModule.register(jwtConstants), UserModule],
  providers: [AuthResolver, AuthService,JwtStrategy],
  exports: [JwtStrategy],
})
export class AuthModule {}
