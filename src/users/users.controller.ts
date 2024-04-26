import { Controller, Get, Param, Delete, Post, Body, Patch } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  getUser(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Post()
  async createUser(@Body() userData: Partial<User>) {
    return this.usersService.create(userData);
  }

  @Patch(':id')
  /**
   * Update a user by ID.
   *
   * @param id - The ID of the user to update.
   * @param userData - The updated user data.
   * @returns A Promise that resolves to the updated user.
   */
  async updateUser(@Param('id') id: number, @Body() userData: Partial<User>) {
    return this.usersService.updateUser(id, userData);
  }
}
