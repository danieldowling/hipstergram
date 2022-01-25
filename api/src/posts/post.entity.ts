import { IsNotEmpty } from 'class-validator';
import { Exclude } from "class-transformer";

import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'post' })
@Entity()
export class Post {

  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  @IsNotEmpty()
  title: string;

  @Field()
  @Column({ length: 255 })
  @IsNotEmpty()
  body: string;

  @Field()
  @Column({ default: 0 })
  @IsNotEmpty()
  notice: number;

  @Column({nullable: true})
  userId: string;

  @Field(type => User, { nullable: true })
  @ManyToOne(_type => User, user => user.posts, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}