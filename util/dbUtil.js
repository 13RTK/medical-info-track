const { Sequelize } = require("sequelize");

const {
    DB_HOST: host,
    DB_USER: user,
    DB_NAME: database,
    DB_PASSWORD: password,
} = require("./../config.js");

exports.sequelize = new Sequelize(database, user, password, {
    host,
    dialect: "mysql",
});

// create the connection to database
// exports.connection = mysql.createConnection({
//     host,
//     user,
//     database,
//     password,
// });
