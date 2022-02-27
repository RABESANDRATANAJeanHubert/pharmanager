import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AppResolver } from './app.resolver';
import { MedecineModule } from './medecine/medecine.module';
import { ProviderModule } from './provider/provider.module';
import { CommandModule } from './command/command.module';
import { InvoiceModule } from './invoice/invoice.module';
import { StockmanagementModule } from './stockmanagement/stockmanagement.module';
import { StockModule } from './stock/stock.module';
import { UnitModule } from './unit/unit.module';
import { SaleModule } from './sale/sale.module';
import { OrdonanceModule } from './ordonance/ordonance.module';
import { PatientModule } from './patient/patient.module';
import { AuthModule } from './auth/auth.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: false,
      playground:  true,
    }),
    MedecineModule,
    ProviderModule,
    CommandModule,
    InvoiceModule,
    StockmanagementModule,
    StockModule,
    UnitModule,
    SaleModule,
    OrdonanceModule,
    PatientModule,
    AuthModule,
    PersonModule,
  ],
  controllers: [AppController],
  providers: [AppResolver, AppService],
})
export class AppModule {}
