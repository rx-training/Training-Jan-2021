const express = require("express");
const router = express.Router();
const stations = require("./station/stations.controller");
const users = require("./user/users.controller");
const trains = require("./train/trains.controller");
const routes = require("./route/routes.controller");
const passengers = require("./passenger/passengers.controller");
const status = require("./status/status.controller");
const payments = require("./payment/payments.controller");
const otp = require("./otp/otp.controller");
const login = require("./login/login.controller");
const verifyAdminToken = require("../authentication/verifyAdminToken");
const verifytoken = require("../authentication/verifytoken");

router.get("/", (req, res) => {
  res.send("Welcome To IRCTC!");
});

router.use("/stations", stations);
router.use("/users", users);
router.use("/trains", trains);
router.use("/routes", routes);
router.use("/passengers", passengers);
router.use("/status", status);
router.use("/payments", payments);
router.use("/otp", otp);
router.use("/login", login);

module.exports = router;
