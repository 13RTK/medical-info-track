const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(express.static("./public"));
app.use(morgan("dev"));

// body-parser middleware use
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
);
app.use(cors());
app.use((req, _res, next) => {
    req.requestTime = Date.now();

    next();
});

module.exports = app;
