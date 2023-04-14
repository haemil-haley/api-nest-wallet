import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { Token } from "../model/token.entity";
import { TokenRepository } from "./token.repository";

@Module({
  imports: [
    SequelizeModule.forFeature([
      Token
    ])
  ],
  providers: [TokenRepository],
  exports: [TokenRepository]
})
export class TokenModule {}
