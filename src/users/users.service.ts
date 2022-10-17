import { Inject, Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(
    @Inject('USERSCONTROLLER_REPOSITORY')
    private repository: Repository<User>,
  ) {}

  create(user: User) : Promise<User>{
    return this.repository.save(user);
  }

  findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findById(id: number) : Promise<User>{
    return this.repository.findOneBy({
      id: id
    });
  }

  findOne(username: string) : Promise<User>{
    return this.repository.findOneBy({
      username: username
    });
  }

  update(id: number, user: User): Promise<UpdateResult> {
    return this.repository.update(id,{
      email: user.email,
      name: user.name,
      birthDay: user.birthDay,
      password: user.password,
      spouse: user.spouse,
      son_name: user.son_name,
      address : user.address,
      phone_number: user.phone_number,
      city_name : user.city_name,
      state_name:user.state_name
    });
  }

  remove(id: number) : Promise<DeleteResult>{
    return this.repository.delete({id:id});
  }
}
