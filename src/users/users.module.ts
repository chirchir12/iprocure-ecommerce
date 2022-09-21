import { Module } from '@nestjs/common';
import { usersProviders } from './prividers/user.providers';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
  controllers: [UsersController], // we will use this outside of this module
})
export class UsersModule {}
