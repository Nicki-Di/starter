import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as path from 'path';
import Debug from 'debug';

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(username: string) {
    return await this.prisma.users.findUnique({ where: { username } });
  }

  async create(CreateUserDto: CreateUserDto) {
    try {
      const salt = await bcrypt.genSalt();
      CreateUserDto.password = await bcrypt.hash(CreateUserDto.password, salt);
      return await this.prisma.users.create({ data: CreateUserDto });
    } catch (error) {
      throw `database: ${error.name}`;
    }
  }
}
