import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/models/dtos/createUser.dto';
import { User } from 'src/models/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  listUsers(): string {
    return 'listUsers';
  }

  getUser(): string {
    return 'single user';
  }

  createUser(user: CreateUserDto): Promise<CreateUserDto> {
    return this.userRepository.save(user);
  }

  updateUser() {}

  deleteUser() {}
}
