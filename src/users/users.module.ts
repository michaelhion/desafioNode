import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database.module';
import { usersProviders } from './entities/user.providers';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports:[
    UsersService
  ]
})
export class UsersModule {}
