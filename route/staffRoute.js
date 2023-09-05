const express = require("express");
const {
    verifyStaffLogin,
    getStaffById,
} = require("../controller/staffController.js");

const staffRouter = express.Router();

staffRouter.route("/staff").post(verifyStaffLogin).get(getStaffById);

module.exports = staffRouter;
