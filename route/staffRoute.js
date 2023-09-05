const express = require("express");
const {
    verifyStaffLogin,
    getStaffById,
    getAllStaff,
} = require("../controller/staffController.js");

const staffRouter = express.Router();

staffRouter.route("/staff").post(verifyStaffLogin).get(getStaffById);
staffRouter.route("/staff-all").get(getAllStaff);

module.exports = staffRouter;
