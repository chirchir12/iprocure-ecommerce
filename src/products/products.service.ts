import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PRODUCT_REPOSITORY } from './constants';
import { ProductDto } from './dtos/product.dto';
import { Product } from './entities/product.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async create(product: ProductDto): Promise<ProductDto> {
    return await this.productRepository.create(product);
  }

  async show(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }

  async update(id, product: ProductDto): Promise<Product> {
    const roleExist = await this.productRepository.findOne({ where: { id } });
    if (!roleExist) {
      throw new NotFoundException('Product does not exist');
    }
    const [numberOfAffectedRows, [updatedProduct]] =
      await this.productRepository.update(
        { ...product },
        { where: { id }, returning: true },
      );
    const { ...results } = updatedProduct['dataValues'];
    return results;
  }

  async delete(id: number) {
    const roleExist = await this.productRepository.findOne({ where: { id } });
    if (!roleExist) {
      throw new NotFoundException('Product does not exist');
    }
    return this.productRepository.destroy({ where: { id } });
  }

  async searchByNameOrPrice(query) {
    if (!query) {
      throw new NotFoundException('product does not exist');
    }
    const keys = Object.keys(query);
    if (!keys.includes('name') || !keys.includes('price')) {
      throw new BadRequestException(
        'search string must be either name or price',
      );
    }
    const products = this.productRepository.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: `%${query.name}%` } },
          { unitCost: query.price },
        ],
      },
    });

    if (!products) {
      throw new NotFoundException('product does not exist');
    }
    return products;
  }
}
