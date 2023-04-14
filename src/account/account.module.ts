import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Account } from "../model/account.entity";
import { AccountController } from './account.controller';
import { AccountRepository } from "./account.repository";
import { SpendingAccountService } from "./spending.account.service";
import { TokenModule } from "../token/token.module";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    SequelizeModule.forFeature([
      Account
    ]),
    TokenModule,
    UserModule
  ],
  controllers: [AccountController],
  providers: [AccountRepository, SpendingAccountService],
})
export class AccountModule {}