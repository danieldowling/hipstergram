import { Controller, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get('/:username')
  getUser(
    @Param('username') username: string
  ): Promise<User> {
    return this.userService.getUser(username);
  } 
}
