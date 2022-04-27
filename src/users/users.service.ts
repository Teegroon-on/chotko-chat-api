import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  public users = [];

  getAll() {
    console.log(this.users);
    return this.users;
  }

  getById(id: number) {
    return this.users.find((u) => u.id === id);
  }

  create(userDto: CreateUserDto) {
    this.users.push(userDto);
    console.log(this.users);
  }
}
