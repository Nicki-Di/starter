import { Injectable } from '@nestjs/common';
import { NationalIdUserDto } from './dto/nationalId-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(NationalIdUserDto: NationalIdUserDto) {
    try {
      return await this.prisma.users.findUniqueOrThrow({
        where: {
          nationalId: NationalIdUserDto.nationalId,
        },
      });
    } catch (error) {
      throw `database: ${error.name}`;
    }
  }
}
