import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { NationalIdUserDto } from './dto/nationalId-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/isRegistered')
  isRegistered(@Body() NationalIdUserDto: NationalIdUserDto) {
    try {
      return this.usersService.getUser(NationalIdUserDto);
    } catch (error) {
      return error;
    }
  }
}
