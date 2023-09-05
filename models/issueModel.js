const { sequelize } = require("./../util/dbUtil.js");
const { DataTypes } = require("sequelize");

exports.Issue = sequelize.define(
    "Issue",
    {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        // },
        poster: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.ENUM,
            values: ["wait", "fixing", "complete"],
            defaultValue: "wait",
        },
        fixedDate: {
            type: DataTypes.DATE,
            defaultValue: "NULL",
            field: "fixed_date",
        },
        createDate: {
            type: DataTypes.DATE,
            field: "create_date",
        },
        staffId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: "staff_id",
        },
    },
    {
        tableName: "issue",
        createdAt: false,
        updatedAt: false,
    }
);
