import { User } from '../entities/user.entity';
import { USER_REPOSITORY } from '../constants';

// custom providers - DI - non class providers
export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
