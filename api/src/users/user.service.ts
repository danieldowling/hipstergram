import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UsersRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
  ) { }

  async getUser(username) {
    const user = await this.usersRepository.createQueryBuilder("user")
      .leftJoinAndSelect("user.posts", "post")
      .where("LOWER(user.username) = LOWER(:username)", { username })
      .getOne();
    return user;
  }

  async getUserPosts(username): Promise<User> {
    const user = await this.getUser(username);
    return Object.assign(user, {count: user.posts.length})
  }
}
