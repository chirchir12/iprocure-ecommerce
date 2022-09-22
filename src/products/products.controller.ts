import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProductDto } from './dtos/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('new')
  async create(@Body() product: ProductDto) {
    return this.productService.create(product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('show')
  async show() {
    return this.productService.show();
  }
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async update(@Param('id') id: number, @Body() product: ProductDto) {
    return this.productService.update(id, product);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.delete(id);
  }
  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async search(@Query() query) {
    return await this.productService.searchByNameOrPrice(query);
  }
}
