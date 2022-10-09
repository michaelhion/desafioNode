import { Test, TestingModule } from '@nestjs/testing';
import { ClientControllerController } from './client-controller.controller';
import { ClientControllerService } from './client-controller.service';

describe('ClientControllerController', () => {
  let controller: ClientControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientControllerController],
      providers: [ClientControllerService],
    }).compile();

    controller = module.get<ClientControllerController>(ClientControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
