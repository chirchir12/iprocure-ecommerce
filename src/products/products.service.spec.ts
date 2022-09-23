import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { productProviders } from './providers/product.provider';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, ...productProviders],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
