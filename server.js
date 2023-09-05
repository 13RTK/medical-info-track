const app = require("./app.js");

const { sequelize } = require("./util/dbUtil.js");

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.log("Error occur during connect to DB!!!");
        console.log(error.message);
    }
})();

//create connection
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
