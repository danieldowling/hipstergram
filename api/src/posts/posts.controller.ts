import { PostsService } from './posts.service';
import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  
  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

}
