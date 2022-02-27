import { Module, Global } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderResolver } from './provider.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Provider } from './provider.entity';


@Global()
  @Module({
  
    imports: [TypeOrmModule.forFeature([Provider])],
    providers: [ProviderResolver, ProviderService],
   
    })
export class ProviderModule {}
