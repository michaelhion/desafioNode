import { Injectable,Inject } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ClientController } from './entities/client-controller.entity';

@Injectable()
export class ClientControllerService {

  constructor(
    @Inject('CLIENTCONTROLLER_REPOSITORY')
    private repository: Repository<ClientController>,
  ) {}

  create(clientController: ClientController) : Promise<ClientController>{
    return this.repository.save(clientController);
  }

  findAll(): Promise<ClientController[]> {
    return this.repository.find();
  }

  findOne(id: number) : Promise<ClientController>{
    return this.repository.findOneBy({
      id: id
    });
  }

  findByName(name: string) : Promise<ClientController>{
    return this.repository.findOneBy({
      name: name
    });
  }

  update(id: number, clientController: ClientController): Promise<UpdateResult> {
    return this.repository.update(id,{
      email: clientController.email,
      name: clientController.name,
      birthDay: clientController.birthDay,
      password: clientController.password,
      spouse: clientController.spouse,
      son_name: clientController.son_name,
      address : clientController.address,
      phone_number: clientController.phone_number
    });
  }

  remove(id: number) : Promise<DeleteResult>{
    return this.repository.delete({id:id});
  }
}
