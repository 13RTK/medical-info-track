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
            `INSERT INTO issue (poster, create_date, description, image, state, fixed_date, staff_id) VALUES ('${poster}', '${createDate}', '${desc}', '${imgsrc}', 'wait', null, null);`
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

exports.findAllIssue = async (_req, res) => {
    const issueArr = await Issue.findAll();

    if (issueArr.length === 0) {
        res.status(500).json({
            status: "failed",
            message: "Can't get issues",
        });
    } else {
        res.status(200).json({
            status: "success",
            length: issueArr.length,
            data: {
                issueArr,
            },
        });
    }
};

exports.findIssueByStaffId = async (req, res) => {
    const staffId = req.query.staffId;
    if (!staffId) {
        res.status(400).json({
            status: "bad request",
            message: "missing field staffId",
        });
    }

    const issueList = await sequelize.query(
        `SELECT t1.* FROM issue AS t1 RIGHT JOIN staff AS t2 ON t1.staff_id = t2.id WHERE t2.id = ${staffId}`
    );

    if (!issueList) {
        res.status(404).json({
            status: "not found",
            message: `can't found any issue for id: ${staffId}`,
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            issueList: issueList[0],
        },
    });
};

exports.updateIssueStaff = async (req, res) => {
    const { id, staffId } = req.body;
    if (!id || !staffId) {
        console.log("missing fields!");
        res.status(400).json({
            status: "bad request",
            message: "missing fields",
        });
    }

    const workRow = await Issue.update(
        { staffId, state: "fixing" },
        {
            where: {
                id,
            },
        }
    );
    console.log(`id : ${id}`);
    console.log(`staffId : ${staffId}`);
    console.log(workRow[0]);

    if (workRow[0] !== 1) {
        console.log("wrong field value");
        res.status(400).json({
            status: "bad request",
            message: "wrong field value",
        });
    } else {
        res.status(200).json({
            status: "success",
        });
    }
};

exports.updateIssueState = async (req, res) => {
    const issueId = req.query.issueId;

    if (!issueId) {
        res.status(400).json({
            status: "faild",
            message: "missing field!",
        });
    }
    const fixedDateStr = convertToISOString(req.requestTime);
    console.log(`Fixed Date : ${fixedDateStr}`);

    const workRow = await Issue.update(
        {
            state: "complete",
            fixedDate: fixedDateStr,
        },
        {
            where: {
                id: issueId,
            },
        }
    );

    if (workRow[0] !== 1) {
        console.log("wrong field value");
        res.status(400).json({
            status: "bad request",
            message: "wrong field value",
        });
    } else {
        res.status(200).json({
            status: "success",
        });
    }
};

// const demoTest = async (staffId, id) => {
//     if (!id || !staffId) {
//         res.status(400).json({
//             status: "bad request",
//             message: "missing fields",
//         });
//     }

//     const updateIssue = await Issue.update(
//         { staffId },
//         {
//             where: {
//                 id,
//             },
//         }
//     );
// };

// demoTest(1, 4);
