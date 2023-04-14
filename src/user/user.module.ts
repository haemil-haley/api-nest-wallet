import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { UserView } from "../model/user.view.entity";
import { UserRepository } from "./user.repository";

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserView
    ])
  ],
  providers: [UserRepository],
  exports: [UserRepository]
})
export class UserModule {}
