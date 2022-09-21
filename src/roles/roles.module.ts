import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { roleProviders } from './providers/roles.provider';

@Module({
  providers: [RolesService, ...roleProviders],
  controllers: [RolesController],
})
export class RolesModule {}
