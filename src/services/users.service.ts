import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  listUsers(): string {
    return 'listUsers';
  }

  getUser(): string {
    return 'single user';
  }

  createUser() {}

  updateUser() {}

  deleteUser() {}
}
