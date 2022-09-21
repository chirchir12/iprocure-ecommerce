import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductDto } from './dtos/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Post('new')
  async create(@Body() product: ProductDto) {
    return this.productService.create(product);
  }

  @Get('show')
  async show() {
    return this.productService.show();
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: ProductDto) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
}
