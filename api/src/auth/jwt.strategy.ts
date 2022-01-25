import { ConfigService } from '@nestjs/config';
import { JwtPayload } from './jwt-payload.interface';
import { AuthRepository } from './auth.repository';
import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { User } from './../users/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AuthRepository)
    private authRepository: AuthRepository,
    private configService: ConfigService,
    private jwtService: JwtService
  ) {
    super({
      secretOrKey: configService.get("JWT_SECRET"),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    })
  }

  async decode(token: string)  {
    return await this.jwtService.decode(token) as Promise<{username: string, iat: number, exp: number}>
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { username } = payload;
    const user: User = await this.authRepository.findOne({username});
    if(!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}