const { convertToDateTime } = require("./../util/dateHelper.js");
const { REMOTE_IMG_URL, LOCAL_IMG_URL } = require("../config.js");
const { connection } = require("./../util/dbUtil.js");

// Database connection
connection.connect(function (err) {
    if (err) {
        return console.error("error: " + err.message);
    }
    console.log("Connected to the MySQL server.");
});

exports.createIssue = (req, res) => {
    if (!req.file) {
        res.status(400).json({
            status: "Bad request",
            message: "Can't find file",
        });
    } else {
        console.log(req.file.filename);
        console.log(JSON.stringify(req.file));

        const poster = req.body.poster;
        const desc = req.body.desc;
        console.log(req.body);

        const createDate = convertToDateTime(+req.requestTime);
        const imgsrc = LOCAL_IMG_URL + req.file.filename;
        const insertData = `INSERT INTO issue(poster, create_date, description, image) VALUES(?, ?, ?, ?)`;
        connection.query(
            insertData,
            [poster, createDate, desc, imgsrc],
            (err, _result) => {
                if (err) {
                    throw err;
                }
                console.log("file uploaded");
            }
        );

        res.status(200).json({
            status: "File uploaded",
            data: {
                imgsrc,
            },
        });
    }
};
