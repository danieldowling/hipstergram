import { Inject, Injectable, Session } from '@nestjs/common';
import { User } from './user.entity';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UsersRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtStrategy: JwtStrategy
  ) { }

  async getUser(username: String) {
    const user = await this.usersRepository.findOne({where: {username}})
    return user;
  }
  
  async getUserById(id) {
    const user = await this.usersRepository.findOne(id)
    return user;
  }

  async getUserPosts(username): Promise<User> {
    const user = await this.getUser(username);
    return Object.assign(user, {count: user.posts.length})
  }
}
