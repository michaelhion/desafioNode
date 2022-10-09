import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientControllerModule } from './client-controller/client-controller.module';

@Module({
  imports: [
    ClientControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
