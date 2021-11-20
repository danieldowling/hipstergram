import { IsNotEmpty, IsOptional } from "class-validator";

export class CreateRecordDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  body: string;

  @IsOptional()
  image_src: string;
}