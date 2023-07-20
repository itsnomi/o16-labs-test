import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './entities/user.entity';
import { UsersController } from './user.controller';
import { AuthService } from 'src/auth/auth.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
imports: [
  forwardRef(() => AuthModule),
],
exports: [UsersService],
providers: [UsersService,],
controllers:[UsersController]
})
export class UserModule {}
