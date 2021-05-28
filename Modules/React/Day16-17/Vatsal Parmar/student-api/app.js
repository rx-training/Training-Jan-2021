const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const students = require("./controllers/students.controller");

var mongoDB = "mongodb://localhost/students";
mongoose
  .connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// const LoggerMiddleware = (req, res, next) => {
//   console.log(
//     `Logged  ${req.url}  ${req.method} body:${req.body}-- ${new Date()}`
//   );
//   next();
// };

const app = express();
// app.use(LoggerMiddleware);
app.use(cors());
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/students", students);

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
