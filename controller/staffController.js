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
    const id = req.query.id;
    if (!id) {
        res.status(404).json({
            status: "failed",
            message: "id field missing!",
        });
    }

    const staff = await sequelize.query(`SELECT * FROM staff WHERE id = ${id}`);
    if (!staff) {
        res.status(404).json({
            status: "failed",
            message: `Can't found this staff : ${id}`,
        });
    }

    res.status(200).json({
        status: "success",
        data: {
            staff,
        },
    });
};
