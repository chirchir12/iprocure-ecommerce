import { Test, TestingModule } from '@nestjs/testing';
import { roleProviders } from './providers/roles.provider';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

describe('RolesService', () => {
  let service: RolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesService, ...roleProviders],
      controllers: [RolesController],
    }).compile();

    service = module.get<RolesService>(RolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
