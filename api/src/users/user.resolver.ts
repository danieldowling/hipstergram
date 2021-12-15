import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PostService } from 'src/posts/post.service';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver(of => User)
export class UsersResolver {
  constructor(
    private readonly userService: UserService,
    private readonly postService: PostService,
    ) {}

  @Query(returns => User)
  async user(@Args('username') username: string): Promise<User> {
    const user = await this.userService.getUser(username);
    if (!user) {
      throw new NotFoundException(username);
    }
    return user;
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    const posts = await this.postService.getAllPosts()
    return posts;
  }
}