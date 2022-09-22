import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { RoleDto } from './dtos/role.dto';
import { AuthGuard } from '@nestjs/passport';
import { DoesRoleExist } from './guards/role.guard';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @UseGuards(AuthGuard('jwt'))
  @UseGuards(DoesRoleExist)
  @Post('new')
  async create(@Body() role: RoleDto) {
    return this.roleService.create(role);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('show')
  async show() {
    return this.roleService.show();
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() role: RoleDto) {
    return this.roleService.update(id, role);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.roleService.delete(id);
  }
}
