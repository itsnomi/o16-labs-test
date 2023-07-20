import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { UsersService } from './user.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('user')
export class UsersController {
  constructor(
    private userService : UsersService
    ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login (@Request()  req):any{
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getHello(): string {
    return this.userService.getHello();
  }
}
