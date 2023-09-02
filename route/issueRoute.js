const express = require("express");
const { upload } = require("../util/multerHelper.js");
const { createIssue } = require("../controller/issueController.js");

const issueRouter = express.Router();

issueRouter.route("/issue").post(upload.single("image"), createIssue);

module.exports = issueRouter;
