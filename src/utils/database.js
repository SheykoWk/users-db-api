const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'users',
    username: 'postgres',
    password: 'root',
    //Extra configs
    define: {
        timestamps: true,
        underscored: true
    },
    //Esta configuracion es para produccion
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})

