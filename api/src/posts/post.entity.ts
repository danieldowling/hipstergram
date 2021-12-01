import { IsNotEmpty } from 'class-validator';
import { Exclude } from "class-transformer";

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

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
  
  @Column({default: 0})
  @IsNotEmpty()
  notice: number;

  @ManyToOne(_type => User, user => user.posts, {eager: false})
  @Exclude({toPlainOnly: true})
  user: User;
}