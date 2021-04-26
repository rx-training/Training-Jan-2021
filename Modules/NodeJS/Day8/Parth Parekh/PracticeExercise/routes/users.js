var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('./config');
/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("respond with a resource");
});

router.post("/login", (req, res) => {
    let userData = {
        username: req.body.username,
        password: req.body.password,
    };
    let token = jwt.sign(userData ,config.secretKey ,{
      algorithm : config.algorithm,
      expiresIn :'5m'
    });

    if (userData.username == "admin" && userData.password == "admin") {
        res.status(200).json({
            message: "Login Successful",
            jwttoken : token
        });
    }
    else{
      res.status(401).json({
        mesaage : 'Login Failed'
      });
    }
});

module.exports = router;
