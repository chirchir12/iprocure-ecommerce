import { Module } from '@nestjs/common';
import { dbConProviders } from './providers/db.providers';

@Module({
  providers: [...dbConProviders],
  exports: [...dbConProviders],
})
export class DatabaseModule {}
