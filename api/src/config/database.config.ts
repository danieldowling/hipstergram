import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { join } from "path"

export default () => ({
  type: process.env.DB_DIALECT || "postgres",
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: process.env.DB_LOGGING === "true",
  entities: [join(__dirname, "../", "**/*.entity{.ts,.js}")],
  migrations: [join(__dirname, "../", "database/migrations/**/*.ts")],
  synchronize: process.env.DB_SYNCHRONIZE === "true",
  dropSchema: process.env.DB_DROP_SCHEMA === "true",
  migrationsRun: process.env.DB_MIGRATIONS_RUN === "true",
}) as TypeOrmModuleOptions
