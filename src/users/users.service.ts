import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoNetworkTimeoutError, Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private UsersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.UsersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.UsersRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.UsersRepository.delete(id);
  }

  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.UsersRepository.create(userData);
    await this.UsersRepository.save(newUser);
    return newUser;
  }

  async updateUser(id: number, userData: Partial<User>): Promise<User> {
    await this.UsersRepository.update(id, userData);
    return this.findOne(id);
  }
}
