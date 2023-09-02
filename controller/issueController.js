const { convertToISOString } = require("./../util/dateHelper.js");
const { REMOTE_IMG_URL, LOCAL_IMG_URL } = require("../config.js");
const { Issue } = require("./../models/issueModel.js");

exports.createIssue = async (req, res) => {
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

        const createDate = convertToISOString(+req.requestTime);
        const imgsrc = LOCAL_IMG_URL + req.file.filename;

        const createdIssue = await Issue.create({
            poster,
            createDate: createDate,
            description: desc,
            image: imgsrc,
            state: "wait",
            fixedDate: null,
        });

        // console.log(createdIssue);

        res.status(200).json({
            status: "File uploaded",
            data: {
                issue: createdIssue,
            },
        });
    }
};
