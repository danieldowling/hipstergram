import { AuthModule } from './../auth/auth.module';
import { PostsModule } from './../posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
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
    AuthModule,
    forwardRef(() => PostsModule)
  ],
  providers: [UserService, UsersResolver],
  controllers: [UserController],
  exports: [UserService]
})
export class UsersModule {}
