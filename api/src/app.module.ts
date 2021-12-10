import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import DatabaseConfig from "./config/database.config"

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/user.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
      load: [
        () => ({ database: DatabaseConfig() }),
      ],
    }),
    UsersModule,
    PostsModule,
    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule {}
