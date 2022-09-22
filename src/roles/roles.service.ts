import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ROLES_REPOSITORY } from './constants';
import { RoleDto } from './dtos/role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject(ROLES_REPOSITORY) private readonly roleRepository: typeof Role,
  ) {}

  async create(role: RoleDto): Promise<Role> {
    return await this.roleRepository.create(role);
  }

  async show(): Promise<Role[]> {
    return await this.roleRepository.findAll();
  }

  async findByName(name: string) {
    return await this.roleRepository.findOne({ where: { name } });
  }

  async update(id, role: RoleDto): Promise<Role> {
    const roleExist = await this.roleRepository.findOne({ where: { id } });
    if (!roleExist) {
      throw new NotFoundException('role not found');
    }
    const [numberOfAffectedRows, [updatedRole]] =
      await this.roleRepository.update(
        { ...role },
        { where: { id }, returning: true },
      );
    const { ...results } = updatedRole['dataValues'];
    return results;
  }

  async delete(id: number) {
    const roleExist = await this.roleRepository.findOne({ where: { id } });
    if (!roleExist) {
      throw new NotFoundException('Role does not exist');
    }
    return this.roleRepository.destroy({ where: { id } });
  }
}
