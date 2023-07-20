// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'john_doe',
      password: 'password123',
      email: 'john@example.com',
      role: 'user',
    },
    {
        id: 2,
        username: 'Noman Azam',
        password: 'password1234',
        email: 'noman@example.com',
        role: 'user',   
    }
    
];

  async findOneByUsername(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }

  async findById(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
