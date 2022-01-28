import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/models/dtos/createUser.dto';
import { UsersService } from 'src/services/users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  listUsers(): string {
    return this.usersService.listUsers();
  }

  @Get(':id')
  getUser(): string {
    return this.usersService.getUser();
  }

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData);
  }

  @Put(':id')
  updateUser() {
    return this.usersService.updateUser();
  }

  @Delete(':id')
  deleteUser() {
    return this.usersService.deleteUser();
  }
}
