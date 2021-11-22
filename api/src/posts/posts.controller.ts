import { User } from './../auth/user.entity';
import { CreatePostDto } from './dto/post.dto';
import { Body, Controller, Get, Post, Param, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as Hipstergram } from './post.entity';
import { GetUser } from '../auth/get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  
  @Get()
  getAllPosts(
    @Query() postDto: CreatePostDto,
  ) {
    return this.postsService.getAllPosts(postDto);
  }
  
  @Get('/:id')
  getPostById(@Param('id') id: string): Promise<Hipstergram> {
    return this.postsService.getPostById(id);
  }
  
  @Delete('/:id')
  deletePostById(@Param('id') id: string): Promise<void> {
    return this.postsService.deletePostById(id);
  }

  @Post()
  @UseGuards(AuthGuard())
  createPost(
    @Body() post: CreatePostDto,
    @GetUser() user: User
  ): Promise<Hipstergram> {
    return this.postsService.createPost(post, user);
  }

  @Patch(':id/update')
  updatePost(
    @Param('id') id: string,
    @Body() postDto: CreatePostDto
  ): Promise<Hipstergram> {
    return this.postsService.updatePost(id, postDto);
  }
}