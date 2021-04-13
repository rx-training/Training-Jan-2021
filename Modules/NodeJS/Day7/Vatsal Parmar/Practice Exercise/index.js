const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const birds = require("./router-middleware");
var cookieParser = require("cookie-parser");
// custom middleware create
const LoggerMiddleware = (req, res, next) => {
  console.log(`Logged  ${req.url}  ${req.method} -- ${new Date()}`);
  next();
};
const app = express();
// router leval middleware
app.use("/birds", birds);

// third party middleware
app.use(helmet());
app.use(morgan("tiny"));
app.use(cookieParser());

// application level middleware
app.use(LoggerMiddleware);

//built in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Error handling middle ware
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// users route
app.get("/users", (req, res) => {
  res.json({
    status: true,
  });
  console.log("Cookies: ", req.cookies);
});
// save route
app.post("/save", (req, res) => {
  res.json({
    status: true,
  });
});
app.listen(3000, (req, res) => {
  console.log("server running on port 3000");
});
