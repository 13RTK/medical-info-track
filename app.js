const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const issueRouter = require("./route/issueRoute");
const staffRouter = require("./route/staffRoute.js");

const app = express();

app.use(express.static("./public"));
app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Cross origin resources
app.use(cors());

// Add timestamp for each request
app.use((req, _res, next) => {
    req.requestTime = Date.now();

    next();
});

app.use("/api/v1", issueRouter);
app.use("/api/v1", staffRouter);

module.exports = app;
