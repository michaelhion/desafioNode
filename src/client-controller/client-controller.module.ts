import { Module } from '@nestjs/common';
import { ClientControllerService } from './client-controller.service';
import { ClientControllerController } from './client-controller.controller';
import { DatabaseModule } from 'src/database.module';
import { clientProviders } from './entities/client.providers';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports:[DatabaseModule],
  controllers: [ClientControllerController],
  providers: [
    ...clientProviders,
    ClientControllerService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports:[
    ClientControllerService
  ]
})
export class ClientControllerModule {}
