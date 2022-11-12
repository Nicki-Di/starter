import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { IdentifyUserDto } from '../users/dto/identify-user.dto';
import Debug from 'debug';
import * as path from 'path';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // this uses strategies/local.strategy.ts under-the-hood
  @Post('/login')
  login(@Body() IdentifyUserDto: IdentifyUserDto, @Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard) // this uses strategies/local.jwt.ts under-the-hood
  @Get('jwtProtected')
  getProfile(@Request() req) {
    return req.user;
  }
}
