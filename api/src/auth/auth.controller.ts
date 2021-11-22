import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Get('/:username')
  getUser(
    @Param('username') username: string
  ): Promise<User> {
    return this.authService.getUser(username);
  }
  
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }
  
  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}> {
    return this.authService.signIn(authCredentialsDto);
  }  
}
