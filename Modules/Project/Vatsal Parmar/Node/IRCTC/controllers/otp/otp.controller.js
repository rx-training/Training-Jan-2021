var express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
var router = express.Router();

const EMAIL = process.env.USER;
const PASSWORD = process.env.PASSWORD;

var otp;

class Otp {
  static async sendOtp(req, res) {
    otp = Math.floor(1000 + Math.random() * 9000);
    let email = req.params.email;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: EMAIL, //sender's email
        pass: PASSWORD, //password
      },
    });
    let info = await transporter.sendMail({
      from: "irctcdemo1@gmail.com", // sender address
      to: email, // list of receivers
      subject: "Verification", // Subject line
      //text: "Here is your otp", // plain text body
      html: `<h1 style="color:orange;">Here is your verification otp:</h1><h2 style="color:blue;">${otp}</h2>`, // html body
    });

    res.send(`Otp sent: ${info.messageId}`);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  }
  static async verifyOtp(req, res) {
    let uOtp = req.params.otp;
    if (otp == uOtp) {
      res.send(true);
    } else {
      res.send(false);
    }
  }
}

//To send
router.post("/send/:email", Otp.sendOtp);
//to verify
router.post("/verify/:otp", Otp.verifyOtp);

module.exports = router;
