import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/upadate-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getAll() {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.userService.getById(id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return 'remove' + id;
  }

  @Put(':id')
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id') id: number,
  ): string {
    return 'update' + id;
  }
}
