import { SequelizeModuleOptions } from "@nestjs/sequelize";

function sequelizeOrmConfig(): SequelizeModuleOptions {
  const commonConfig = {
    MODELS: []
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