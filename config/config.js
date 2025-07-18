require('dotenv').config();

module.exports = {
    development: {
        username: 'root',
        password: null,
        database: 'kos_app',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: null,
        database: 'kos_app_test',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: 'root',
        password: null,
        database: 'kos_app_prod',
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};
