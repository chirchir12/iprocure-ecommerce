import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from './dtos/index.dto';
import { DoesUserExist } from './guards/userExist.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @UseGuards(DoesUserExist)
  @Post('new')
  async create(@Body() user: UserDto) {
    const Newuser = await this.userService.create(user);
    const { password, ...results } = Newuser['dataValues'];
    return results;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('show')
  async show() {
    return this.userService.show();
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto) {
    return await this.userService.update(id, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
