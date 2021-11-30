import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import DatabaseConfig from "./config/database.config"

import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
      load: [
        () => ({ database: DatabaseConfig() }),
      ],
    }),
    PostsModule,
    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule {}
