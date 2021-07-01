var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("../../authentication/global.config");
var crypto = require("crypto");
const UserModel = require("../../models/users.model");

class Login {
  static async login(req, res) {
    let userdata = {
      email: req.body.email,
      password: req.body.password,
    };
    //for user varificarion

    let token = jwt.sign(userdata, config.secretKey, {
      algorithm: config.algorithm,
      expiresIn: "2h",
    });
    const users = await UserModel.find();

    for (let i = 0; i < users.length; i++) {
      var mykey = crypto.createDecipher("aes-128-cbc", "mypassword");
      var mystr = mykey.update(users[i].password, "hex", "utf8");
      mystr += mykey.final("utf8");
      users[i].password = mystr;
    }

    const user = users.find(
      (u) => u.email == userdata.email && u.password == userdata.password
    );
    if (user) {
      const uData = {
        id: user._id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        mobile: user.mobile,
      };
      res.status(200).json({
        message: "Login Successful",
        jwtoken: token,
        user: uData,
      });
    } else {
      res.status(401).json({
        message: "Wrong EmailId Or Password",
      });
    }
  }
}

router.post("/", Login.login);

module.exports = router;
