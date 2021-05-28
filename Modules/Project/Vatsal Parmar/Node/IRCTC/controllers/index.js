const express = require("express");
const router = express.Router();
const stations = require("./station/stations.controller");
const users = require("./user/users.controller");
const trains = require("./train/trains.controller");
const routes = require("./route/routes.controller");
const pnrs = require("./pnr/pnrs.controller");
const status = require("./status/status.controller");
const payments = require("./payment/payments.controller");
const otp = require("./otp/otp.controller");
const login = require("./login/login.controller");

router.get("/", (req, res) => {
  res.send("Welcome To IRCTC!");
});

router.use("/stations", stations);
router.use("/users", users);
router.use("/trains", trains);
router.use("/routes", routes);
router.use("/pnrs", pnrs);
router.use("/status", status);
router.use("/payments", payments);
router.use("/otp", otp);
router.use("/login", login);

module.exports = router;
