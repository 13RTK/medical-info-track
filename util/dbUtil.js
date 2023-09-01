const mysql = require("mysql2");
const {
    DB_HOST: host,
    DB_USER: user,
    DB_NAME: database,
    DB_PASSWORD: password,
} = require("./../config.js");

// create the connection to database
exports.connection = mysql.createConnection({
    host,
    user,
    database,
    password,
});
