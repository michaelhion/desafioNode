import { Module } from '@nestjs/common';
import { ClientControllerService } from './client-controller.service';
import { ClientControllerController } from './client-controller.controller';
import { DatabaseModule } from 'src/database.module';
import { clientProviders } from './entities/client.providers';

@Module({
  imports:[DatabaseModule],
  controllers: [ClientControllerController],
  providers: [
    ...clientProviders,
    ClientControllerService
  ],
  exports:[
    ClientControllerService
  ]
})
export class ClientControllerModule {}
