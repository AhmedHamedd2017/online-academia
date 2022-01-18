import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
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
  createUser() {
    return this.usersService.createUser();
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
