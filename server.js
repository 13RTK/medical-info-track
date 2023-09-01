const app = require("./app.js");
const multer = require("multer");
const path = require("path");
const { createIssue } = require("./controller/issueController.js");

// Use of Multer
const storage = multer.diskStorage({
    destination: (_req, _file, callBack) => {
        callBack(null, "./public/images/"); // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(
            null,
            file.fieldname +
                "-" +
                req.requestTime +
                path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage,
});

// Routes start

app.use((req, _res, next) => {
    req.requestTime = Date.now();

    next();
});

//@type   POST
//route for post data
app.post("/issue", upload.single("image"), createIssue);

//create connection
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
