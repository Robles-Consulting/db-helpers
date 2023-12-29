module.exports = {
    development: {
        username: 'postgres',
        password: 'postgres',
        database: 'postgres',
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
    },
    production: {
        username: 'doadmin',
        password: 'AVNS_TV_50hLSrZj13y7Xyc2',
        database: 'defaultdb',
        host: 'dbaas-db-2607443-do-user-13996183-0.c.db.ondigitalocean.com',
        // dialect: 'postgres',
        port: 25060,
        ssl: {
            ca: ca_cert,
        },
    }
    // production: {
    //     username: 'postgres',
    //     password: 'postgres',
    //     database: 'postgres',
    //     host: process.env.HOST,
    //     dialect: 'postgres',
    //     port: 5432
    // }
}