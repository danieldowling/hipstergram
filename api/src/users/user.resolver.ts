import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver, Subscription } from '@nestjs/graphql';
import { PostService } from 'src/posts/post.service';
import { User } from './user.entity';
import { UserService } from './user.service';

// const pubSub = new PubSub();

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

  // @Query(returns => [Recipe])
  // recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
  //   return this.recipesService.findAll(recipesArgs);
  // }

  // @Mutation(returns => Recipe)
  // async addRecipe(
  //   @Args('newRecipeData') newRecipeData: NewRecipeInput,
  // ): Promise<Recipe> {
  //   const recipe = await this.recipesService.create(newRecipeData);
  //   pubSub.publish('recipeAdded', { recipeAdded: recipe });
  //   return recipe;
  // }

  // @Mutation(returns => Boolean)
  // async removeRecipe(@Args('id') id: string) {
  //   return this.recipesService.remove(id);
  // }

  // @Subscription(returns => Recipe)
  // recipeAdded() {
  //   return pubSub.asyncIterator('recipeAdded');
  // }
}