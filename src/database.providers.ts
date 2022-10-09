import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'sa',
        password: '<YourStrong@Passw0rd>',
        database: 'desafionode',
        entities: [
          "dist/**/*.entity.js"//join(__dirname + '/../**/*.entity.{js,ts}'),
        ],
        synchronize: true,
        options:  { encrypt: false }
      });

      return dataSource.initialize();
    },
  },
];