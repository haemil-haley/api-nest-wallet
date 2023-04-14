import { Module } from '@nestjs/common';
import { SequelizeModule } from "@nestjs/sequelize";
import { sequelizeOrmConfig } from "./configuration/sequelize.orm.config";

@Module({
  imports: [
    SequelizeModule.forRootAsync({ useFactory: sequelizeOrmConfig })
  ]
})
export class AppModule {}
