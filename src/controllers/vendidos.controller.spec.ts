import { Test, TestingModule } from '@nestjs/testing';
import { VendidosController } from './vendidos.controller';

describe('VendidosController', () => {
  let controller: VendidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VendidosController],
    }).compile();

    controller = module.get<VendidosController>(VendidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
