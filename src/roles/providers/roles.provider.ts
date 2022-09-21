import { ROLES_REPOSITORY } from '../constants';
import { Role } from '../entities/role.entity';

export const roleProviders = [
  {
    provide: ROLES_REPOSITORY,
    useValue: Role,
  },
];
