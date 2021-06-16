const path = require("path");

const multer = require("multer");

// const upload = multer({ dest: 'uploads/' });
//for adding files -  enctype="multipart/form-data"

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

module.exports = upload;
