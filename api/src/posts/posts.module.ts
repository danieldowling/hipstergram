import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsRepository } from './posts.repository';

import { Module } from '@nestjs/common';
import { AuthModule } from './../auth/auth.module';

import { PostsController } from './posts.controller';
import { PostService } from './post.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([PostsRepository]),
    AuthModule
  ],
  controllers: [PostsController],
  providers: [PostService],
  exports: [PostService]
})
export class PostsModule {}
