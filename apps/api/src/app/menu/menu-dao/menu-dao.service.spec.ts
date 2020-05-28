import { Test, TestingModule } from '@nestjs/testing';
import { MenuDaoService } from './menu-dao.service';

describe('MenuDaoService', () => {
  let service: MenuDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuDaoService],
    }).compile();

    service = module.get<MenuDaoService>(MenuDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
