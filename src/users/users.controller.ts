import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserValidatorPipe } from './validation.pipe';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get()
  // async findOne() {
  //   try {
  //     return await this.usersService.findOne('');
  //   } catch (error) {
  //     throw error;
  //   }
  // }

  @Post('/create')
  async create(
    @Body(new CreateUserValidatorPipe()) CreateUserDto: CreateUserDto,
  ) {
    try {
      return await this.usersService.create(CreateUserDto);
    } catch (error) {
      throw error;
    }
  }
}
