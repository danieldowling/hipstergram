import { UserService } from './../users/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';

import { forwardRef, Module } from '@nestjs/common';
import { AuthModule } from './../auth/auth.module';

import { PostsController } from './posts.controller';
import { PostService } from './post.service';
import { PostsResolver } from './post.resolver';
import { UsersModule } from 'src/users/user.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([PostsRepository]),
    AuthModule,
    forwardRef(() => UsersModule)
  ],
  controllers: [PostsController],
  providers: [PostService, PostsResolver],
  exports: [PostService]
})
export class PostsModule {}
