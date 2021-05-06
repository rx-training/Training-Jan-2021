var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("./config");
const student = require("../../../../Day6/Nisarg/Assignment/Students.json");
const verifytoken = require("./verifytoken");
/* GET home page. */

router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/students/:id/fees", verifytoken, (req, res) => {
    const data = student.find((c) => c.ID == req.params.id);
    res.send(data.Fees);
});

router.get("/students/:id/result", verifytoken, (req, res) => {
    const data = student.find((c) => c.ID == req.params.id);
    res.send(data.Result);
});

router.post("/login", (req, res) => {
    let userData = {
        username: req.body.username,
        password: req.body.password,
    };
    let token = jwt.sign(userData, config.secretKey, {
        algorithm: config.algorithm,
        expiresIn: "5m",
    });

    if (userData.username == "admin" && userData.password == "admin") {
        res.status(200).json({
            message: "Login Successful",
            jwttoken: token,
        });
    } else {
        res.status(401).json({
            mesaage: "Login Failed",
        });
    }
});

module.exports = router;