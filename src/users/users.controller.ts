import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserDto } from './dtos/index.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('new')
  async create(@Body() user: UserDto) {
    const Newuser = await this.userService.create(user);
    const { password, ...results } = Newuser['dataValues'];
    return results;
  }

  @Get('show')
  async show() {
    return this.userService.show();
  }
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto) {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
