import { UserService } from 'src/users/user.service';
import { CurrentUser, GqlAuthGuard } from 'src/auth/auth.guard';
import { CreatePostInput } from './dto/post.dto';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql';
import { Post } from "./post.entity";
import { PostService } from './post.service';
import { User } from 'src/users/user.entity';

@Resolver(of => Post)
export class PostsResolver {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Query(returns => [Post])
  async posts(): Promise<Post[]> {
    const posts = await this.postService.getAllPosts();
    if(!posts) {
      throw new NotFoundException();
    }
    return posts;
  }
  
  @Query(returns => Post)
  async post(@Args('id') id: string): Promise<Post> {
    const post = await this.postService.getPostById(id);
    if(!post) {
      throw new NotFoundException();
    }
    return post;
  }

  @Mutation(returns => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(
    @Args('post') post: CreatePostInput,
    @CurrentUser() user: User
    ): Promise<Post> {
    return this.postService.createPost(post, user)
  }

  @ResolveField()
  async user(@Parent() post: Post) {
    return this.userService.getUserById(post.userId);
  }
}