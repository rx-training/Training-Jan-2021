const express = require("express");
const winston = require("winston");
var cors = require("cors");

const app = express();
const port = process.env.port;

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

const controllerRouter = require("./controllers/index");
app.use("/", controllerRouter);

const server = app.listen(port, () => {
  winston.info(`App listening on port ${port}...`);
  console.log(`App listening on port ${port}...`);
});

module.exports = server;
