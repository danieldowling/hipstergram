import { PostsModule } from './../posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersRepository } from './user.repository';
import { UsersResolver } from './user.resolver';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      UsersRepository
    ]),
    PostsModule
  ],
  providers: [UserService, UsersResolver],
  controllers: [UserController],
})
export class UsersModule {}
