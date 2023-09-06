const { Staff } = require("./../models/staffModel.js");
const { sequelize } = require("../util/dbUtil.js");

exports.verifyStaffLogin = async (req, res) => {
    const { username, password } = req.body;

    console.log(`username : ${username} login`);

    const user = await Staff.findOne({
        where: { staffName: username, password: password },
    });
    if (user === null) {
        res.status(404).json({
            status: "Not found",
            message: "Issue not found",
        });
    } else {
        console.log(JSON.stringify(user));
        res.status(200).json({
            status: "query success",
            data: {
                user,
            },
        });
    }
};

exports.getStaffById = async (req, res) => {
    const staffId = req.query.staffId;
    if (!staffId) {
        res.status(404).json({
            status: "failed",
            message: "id field missing!",
        });
    }

    const staff = await sequelize.query(
        `SELECT * FROM staff WHERE id = ${staffId}`
    );
    if (!staff) {
        res.status(404).json({
            status: "failed",
            message: `Can't found this staff : ${staffId}`,
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            staff: staff[0],
        },
    });
};

exports.getAllStaff = async (_req, res) => {
    const staffList = await Staff.findAll();
    if (!staffList) {
        res.status(500).json({
            status: "failed",
            message: "Failed to get all staff info",
        });
    }

    res.status(200).json({
        status: "success",
        length: staffList.length,
        data: staffList,
    });
};
