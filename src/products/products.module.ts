import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productProviders } from './providers/product.provider';

@Module({
  providers: [ProductsService, ...productProviders],
  controllers: [ProductsController],
})
export class ProductsModule {}
