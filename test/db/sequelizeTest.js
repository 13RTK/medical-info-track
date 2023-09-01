const { Issue } = require("./../../models/issueModel.js");
const { convertToISOString } = require("./../../util/dateHelper.js");

const selectAllIssue = async () => {
    const issues = await Issue.findAll();
    issues.forEach((issue) => console.log(JSON.stringify(issue)));
};

const insertIssue = async () => {
    const issue = await Issue.create({
        poster: "Alex",
        createDate: convertToISOString(Date.now()),
        description: "demo",
        image: "http://deafhu/dehiu",
        state: "wait",
        fixedDate: null,
    });

    console.log(JSON.stringify(issue));
};

// selectAllIssue();
insertIssue();
