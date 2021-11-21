import { Post } from './../posts/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true})
  username: string;

  @Column()
  password: string;

  @OneToMany(_type => Post, post => post.user, {eager: true})
  posts: Post[];
}