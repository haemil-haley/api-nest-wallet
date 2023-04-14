import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { sequelizeOrmConfig } from "./configuration/sequelize.orm.config";
import { AccountModule } from './account/account.module';
import { TokenModule } from './token/token.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({ useFactory: sequelizeOrmConfig }),
    AccountModule,
    TokenModule,
    UserModule
  ]
})
export class AppModule {}
