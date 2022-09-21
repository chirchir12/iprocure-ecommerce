import { Module } from '@nestjs/common';
import { usersProviders } from './prividers/user.providers';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService], // we will use this outside of this module
})
export class UsersModule {}
