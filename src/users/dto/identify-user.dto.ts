import { ApiProperty } from '@nestjs/swagger';

export class IdentifyUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}
