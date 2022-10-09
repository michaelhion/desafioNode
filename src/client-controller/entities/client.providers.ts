import { DataSource } from 'typeorm';
import { ClientController } from './client-controller.entity';

export const clientProviders = [
  {
    provide: 'CLIENTCONTROLLER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClientController),
    inject: ['DATA_SOURCE'],
  },
];