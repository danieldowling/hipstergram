import { Inject, Injectable } from '@nestjs/common';
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
}
