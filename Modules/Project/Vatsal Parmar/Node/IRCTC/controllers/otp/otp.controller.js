var express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
var router = express.Router();
const UserModel = require("../../models/users.model");

const EMAIL = process.env.IRCTC_EMAIL;
const PASSWORD = process.env.IRCTC_PASSWORD;

var otp;

class Otp {
  static async sendOtp(req, res) {
    otp = Math.floor(1000 + Math.random() * 9000);
    let email = req.params.email;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      ignoreTLS: false,
      secure: false,
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
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: rgb(1, 1, 139);text-decoration:none;font-weight:600">IRCTC</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for choosing IRCTC. Use the following OTP to complete your Sign Up procedures.</p>
        <h2 style="background: rgb(1, 1, 139);margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
        <p style="font-size:0.9em;">Regards,<br />IRCTC</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>IRCTC Inc</p>
          <p>India</p>
        </div>
      </div>
    </div>`, // html body
    });

    console.log(`Otp sent: ${info.messageId}`);
    res.status(200).send(`${otp}`);
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
  static async checkEmail(req, res) {
    let email = req.params.email;
    let result = await UserModel.find({ email: email });
    if (result.length > 0) {
      res.send("exists");
    } else {
      res.send("not exists");
    }
  }
}

//To send
router.post("/send/:email", Otp.sendOtp);
//to verify
router.post("/verify/:otp", Otp.verifyOtp);
//to check mail
router.post("/check-mail/:email", Otp.checkEmail);

module.exports = router;
