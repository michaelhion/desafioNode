import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards,Request } from '@nestjs/common';
import { ClientControllerService } from './client-controller.service';
import { ClientController } from './entities/client-controller.entity';

@Controller('client-controller')
export class ClientControllerController {
  
  constructor(
    // private authService: AuthService,
    private clientControllerService: ClientControllerService,
    ) {}

    // @UseGuards(AuthGuard('local'))
    // @Post('auth/login')
    // async login(@Request() req) {
    //   return this.authService.login(req.user);
    // }


  @Post()
  create(@Body() clientController: ClientController) {
    return this.clientControllerService.create(clientController);
  }

  @Get()
  findAll() {
    return this.clientControllerService.findAll();
  }

  @Get(':name')
  findByName(@Param('name')name:string) {
    return this.clientControllerService.findByName(name);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientControllerService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() clientController: ClientController) {
    return this.clientControllerService.update(+id, clientController);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientControllerService.remove(+id);
  }
}
