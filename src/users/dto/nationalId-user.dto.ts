import { ApiProperty } from '@nestjs/swagger';

export class NationalIdUserDto {
  @ApiProperty()
  nationalId: string;
}
