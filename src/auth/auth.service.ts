import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/user/user.service';
@Injectable()
export class AuthService {
    constructor(
        private userService : UsersService,
        private jwtService: JwtService
    ){}

    async validateUser (username : string, password : string){
        const user = await this.userService.findOneByUsername(username)

        if(user &&user.password === password){
            return user; 
        }
        return null;
    }

    async login(username, password) {
        const payload = { username: username, pass: password };
        return {
          user:payload,
          access_token: await this.jwtService.sign(payload),
        };
      }
}
