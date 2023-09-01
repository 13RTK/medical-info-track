const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const database = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;

// create the connection to database
exports.connection = mysql.createConnection({
    host,
    user,
    database,
    password,
});
