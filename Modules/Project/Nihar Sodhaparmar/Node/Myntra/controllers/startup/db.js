const mongoose = require("mongoose");
const winston = require("winston");
const config = require("config");

module.exports = function () {
  const database = config.get("db");

  mongoose
    .connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      winston.info(`Connected to ${database}...`);
      console.log(`Connected to ${database}...`);
    });
};
