import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty({ required: false })
  fullName?: string;
}
