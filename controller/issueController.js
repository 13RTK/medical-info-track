const {
    convertToISOString,
    convertToDateTime,
} = require("./../util/dateHelper.js");
const { REMOTE_IMG_URL, LOCAL_IMG_URL } = require("../config.js");
const { Issue } = require("./../models/issueModel.js");
const { sequelize } = require("../util/dbUtil.js");

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

        const createDate = convertToDateTime(+req.requestTime);
        const imgsrc = REMOTE_IMG_URL + req.file.filename;

        console.log("=".repeat(20));
        console.log(createDate);
        console.log(imgsrc);
        console.log(poster);
        console.log(desc);

        console.log("=".repeat(20));
        // const createdIssue = await Issue.create({
        //     poster,
        //     createDate: Sequelize.literal(createDate),
        //     description: desc,
        //     image: imgsrc,
        //     state: "wait",
        //     fixedDate: null,
        // });

        const createdIssue = await sequelize.query(
            `INSERT INTO issue (poster, create_date, description, image, state, fixed_date) VALUES ('${poster}', '${createDate}', '${desc}', '${imgsrc}', 'wait', null);`
        );

        console.log(
            JSON.stringify({
                status: "File uploaded",
                data: {
                    issue: createdIssue,
                },
            })
        );

        res.status(200).json({
            status: "File uploaded",
            data: {
                issue: createdIssue,
            },
        });
    }
};

exports.findIssueById = async (req, res) => {
    const issueId = +req.query.issueId;

    console.log(issueId);

    const issue = await Issue.findOne({ where: { id: issueId } });
    if (issue === null) {
        res.status(404).json({
            status: "Not found",
            message: "Issue not found",
        });
    } else {
        console.log(JSON.stringify(issue));
        res.status(200).json({
            status: "query success",
            data: {
                issue: issue,
            },
        });
    }
};
