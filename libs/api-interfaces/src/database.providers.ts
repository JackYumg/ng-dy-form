import { createConnection } from 'typeorm';
console.log(__dirname);
export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            synchronize: true,
        }),
    },
];