import { User } from './../users/user.entity';
import { CreatePostDto } from './dto/post.dto';
import { Body, Controller, Get, Post, Param, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { Post as Hipstergram } from './post.entity';
import { GetUser } from '../users/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private postService: PostService) {}
  
  @Get()
  getAllPosts(
    @Query() postDto: CreatePostDto,
  ) {
    return this.postService.getAllPosts(postDto);
  }
  
  @Get('/:id')
  getPostById(@Param('id') id: string): Promise<Hipstergram> {
    return this.postService.getPostById(id);
  }
  
  @Delete('/:id')
  deletePostById(@Param('id') id: string): Promise<void> {
    return this.postService.deletePostById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  createPost(
    @Body() post: CreatePostDto,
    @GetUser() user: User
  ): Promise<Hipstergram> {
    return this.postService.createPost(post, user);
  }

  @Patch(':id/update')
  updatePost(
    @Param('id') id: string,
    @Body() postDto: CreatePostDto
  ): Promise<Hipstergram> {
    return this.postService.updatePost(id, postDto);
  }
}