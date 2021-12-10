import { Post } from "../posts/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from "class-transformer";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@Entity()
@ObjectType({ description: 'user ' })
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({unique: true})
  username: string;

  @Field()
  @Column()
  @Exclude()
  password: string;

  @Field(type => [Post])
  @OneToMany(type => Post, post => post.user, {eager: true})
  posts: Post[];
}