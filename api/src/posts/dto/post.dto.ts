import { IsNotEmpty, IsOptional } from "class-validator";

export class CreatePostDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  body: string;

  @IsOptional()
  image_src: string;
}