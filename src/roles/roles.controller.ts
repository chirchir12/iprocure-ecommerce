import {
  Controller,
  Body,
  Post,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleDto } from './dtos/role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private readonly roleService: RolesService) {}

  @Post('new')
  async create(@Body() role: RoleDto) {
    return this.roleService.create(role);
  }

  @Get('show')
  async show() {
    return this.roleService.show();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() role: RoleDto) {
    return this.roleService.update(id, role);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.roleService.delete(id);
  }
}
