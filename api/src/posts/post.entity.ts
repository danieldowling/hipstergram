import { IsNotEmpty } from 'class-validator';
import { Exclude } from "class-transformer";

import { User } from 'src/auth/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @IsNotEmpty()
  title: string;
  
  @Column({length: 255})
  @IsNotEmpty()
  body: string;

  @ManyToOne(_type => User, user => user.posts, {eager: false})
  @Exclude({toPlainOnly: true})
  user: User;
}