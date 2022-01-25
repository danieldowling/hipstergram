import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from "class-validator";
import { Entity } from 'typeorm';

@ObjectType({description: 'createPost'})
export class CreatePostDto {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field()
  image_src: string;
}


@InputType()
export class CreatePostInput {
  @Field()
  title: string;

  @Field()
  body: string;

  @Field({nullable: true})
  image_src: string;
}