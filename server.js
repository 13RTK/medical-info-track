const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const multer = require("multer");
const path = require("path");
const { connection } = require("./util/dbUtil.js");
const { convertToDateTime } = require("./util/dateHelper.js");
const cors = require("cors");

//use express static folder
app.use(express.static("./public"));

// body-parser middleware use
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
);
app.use(cors());

// Database connection
connection.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message);
    }
    console.log("Connected to the MySQL server.");
});

//! Use of Multer
const storage = multer.diskStorage({
    destination: (_req, _file, callBack) => {
        callBack(null, "./public/images/"); // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(
            null,
            file.fieldname +
                "-" +
                req.requestTime +
                path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage,
});

//! Routes start

app.use((req, _res, next) => {
    req.requestTime = Date.now();

    next();
});

//route for Home page
app.get("/", (_req, res) => {
    res.sendFile(__dirname + "/index.html");
});

//@type   POST
//route for post data
app.post("/issue", upload.single("image"), (req, res) => {
    if (!req.file) {
        res.status(400).json({
            status: "Bad request",
            message: "Can't find file"
        });
    } else {
        console.log(req.file.filename);
        console.log(JSON.stringify(req.file));

        const poster = req.body.poster;
        const desc = req.body.desc;
        console.log(req.body);

        const createDate = convertToDateTime(+req.requestTime);
        const imgsrc = "http://116.62.152.170:8080/images/" + req.file.filename;
        const insertData = `INSERT INTO issue(poster, create_date, description, image) VALUES(?, ?, ?, ?)`;
        connection.query(insertData, [poster, createDate, desc, imgsrc], (err, _result) => {
            if (err) {
                throw err;
            }
            console.log("file uploaded");
        });

        res.status(200).json({
            status: "File uploaded",
            data: {
                imgsrc,
            },
        });
    }
});

//create connection
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
