const express = require("express");
const { upload } = require("../util/multerHelper.js");
const {
    createIssue,
    findIssueById,
    findAllIssue,
} = require("../controller/issueController.js");

const issueRouter = express.Router();

issueRouter
    .route("/issue")
    .post(upload.single("image"), createIssue)
    .get(findIssueById);

issueRouter.route("/issue-all").get(findAllIssue);

module.exports = issueRouter;
