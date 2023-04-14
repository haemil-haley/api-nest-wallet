import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { Account } from "../model/account.entity";
import { Token } from "../model/token.entity";
import { UserView } from "../model/user.view.entity";

function sequelizeOrmConfig(): SequelizeModuleOptions {
  const commonConfig = {
    MODELS: [Account, Token, UserView]
  }

  const ormConfig: SequelizeModuleOptions = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "db_test",
    models: commonConfig.MODELS,
    logging: true
  }

  return ormConfig;
}

export { sequelizeOrmConfig }