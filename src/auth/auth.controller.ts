import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { IdentifyUserDto } from '../users/dto/identify-user.dto';
import Debug from 'debug';
import * as path from 'path';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

const debug = new Debug(`tag:${path.basename(__filename)}`);

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // this uses authService.validateUser under-the-hood
  @Post('/login')
  login(@Body() IdentifyUserDto: IdentifyUserDto, @Request() req) {
    return this.authService.login(req.user);
  }
}
