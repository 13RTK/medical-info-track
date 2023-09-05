const { sequelize } = require("./../util/dbUtil.js");
const { DataTypes } = require("sequelize");

exports.Staff = sequelize.define(
    "Staff",
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        // },
        staffName: {
            type: DataTypes.STRING,
            field: "staff_name",
            allowNull: false,
        },
        staffRole: {
            type: DataTypes.ENUM,
            values: ["staff", "admin"],
            allowNull: true,
            defaultValue: "staff",
            field: "staff_role",
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "staff",
        createdAt: false,
        updatedAt: false,
    }
);
