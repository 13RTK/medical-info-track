const express = require("express");
const { upload } = require("../util/multerHelper.js");
const {
    createIssue,
    findIssueById,
    findAllIssue,
    findIssueByStaffId,
    updateIssueStaff,
    updateIssueState,
} = require("../controller/issueController.js");

const issueRouter = express.Router();

issueRouter
    .route("/issue")
    .post(upload.single("image"), createIssue)
    .get(findIssueById)
    .patch(updateIssueStaff);

issueRouter.route("/issue-all").get(findAllIssue);
issueRouter.route("/staff-issue-all").get(findIssueByStaffId);
issueRouter.route("/issue-complete").get(updateIssueState);

module.exports = issueRouter;
