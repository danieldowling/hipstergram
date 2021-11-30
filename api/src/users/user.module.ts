import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UsersRepository } from './user.repository';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([
      UsersRepository
    ])
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
