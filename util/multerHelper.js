const multer = require("multer");
const path = require("path");

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

exports.upload = multer({
    storage,
});
