const express = require("express");
const mongoose = require("mongoose");
var createError = require("http-errors");
const mainRouter = require("./controllers/index");
const cors = require("cors");
var mongoDB = "mongodb://localhost/irctc-2021";

mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected To MongoDB"));
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const app = express();
const port = process.env.port;

// var corsOptions = {
//   origin: "http://20.198.103.48:91",
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true,
//   allowedHeaders: "Content-Type,x-access-token",
// };

// app.use(cors(corsOptions));
app.use(cors());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Headers", "x-access-token, Content-Type");
//   res.header("Allow", "GET,PUT,POST,DELETE");
//   next();
// });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // seding error message
  res.status(err.status || 500).send("Smething is broke!!");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
