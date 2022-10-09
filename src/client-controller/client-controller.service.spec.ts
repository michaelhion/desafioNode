import { Test, TestingModule } from '@nestjs/testing';
import { ClientControllerService } from './client-controller.service';

describe('ClientControllerService', () => {
  let service: ClientControllerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientControllerService],
    }).compile();

    service = module.get<ClientControllerService>(ClientControllerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
