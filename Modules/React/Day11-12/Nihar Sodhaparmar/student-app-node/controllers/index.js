const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const database = "mongodb://localhost/StudentDB";

const studentRouter = require("./students/students");
router.use("/students", studentRouter);

mongoose
  .connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to ${database}...`);
  });

module.exports = router;
