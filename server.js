const app = require("./app.js");

const { sequelize } = require("./util/dbUtil.js");

(async () => {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
})();

//create connection
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
