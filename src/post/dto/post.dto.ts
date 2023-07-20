import { IsNotEmpty, IsEmail } from 'class-validator';

export class PostDto {
  
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description : string;

  @IsNotEmpty()
  createdBy: string;

  @IsNotEmpty()
  image : string;
  
}