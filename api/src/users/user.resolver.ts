import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { GqlAuthGuard, CurrentUser } from 'src/auth/auth.guard';
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
  async user(@Args('username', { nullable: true }) username: string): Promise<User> {
    const user = await this.userService.getUser(username);
    if (!user) {
      throw new NotFoundException(username);
    }
    return user;
  }

  @Query(returns => User)
  @UseGuards(GqlAuthGuard)
  async me(@CurrentUser() user: User) {
    return await this.userService.getUser(user.username);
  }

  @ResolveField()
  async posts(@Parent() user: User) {
    // need to use user to get correct posts
    const posts = await this.postService.getAllPosts()
    return posts;
  }
}