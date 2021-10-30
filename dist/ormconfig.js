"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'Lfrrfh333#',
    database: 'nestjs-shop',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false,
    migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
    cli: {
        migrationsDir: 'src/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map