import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'Lfrrfh333#',
  database: 'nestjs-shop',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, //  synchronize: true; - typeorm read entites and create tables on each app launch
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default config;
