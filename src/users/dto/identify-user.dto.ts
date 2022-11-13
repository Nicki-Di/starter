import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class IdentifyUserDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ default: 'test@gmail.com' })
  username: string;

  @IsNotEmpty()
  @ApiProperty({ default: '@8as.Y)2>w' })
  password: string;
}
