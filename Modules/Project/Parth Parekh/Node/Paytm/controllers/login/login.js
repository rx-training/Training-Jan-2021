const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
require("dotenv").config();

const USER = process.env.USER;
const PASS = process.env.PASS;

var otp;

class LoginController {
    static async Sendotp(req, res) {
        otp = Math.floor(1000 + Math.random() * 3000);
        let data = req.body;
        let email = data.email;
        // console.log(email);
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER,
                pass: PASS,
            },
        });

        try {
            let info = await transporter.sendMail({
                from: USER,
                to: email,
                subject: "Verification",
                html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
      <div style="margin:50px auto;width:70%;padding:20px 0">
        <div style="border-bottom:1px solid #eee">
          <a href="" style="font-size:1.4em;color: rgb(1, 1, 139);text-decoration:none;font-weight:600">Paytm</a>
        </div>
        <p style="font-size:1.1em">Hi,</p>
        <p>Thank you for choosing Paytm. Use the following OTP to complete your Sign Up procedures.</p>
        <h2 style="background: rgb(1, 1, 139);margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
        <p style="font-size:0.9em;">Regards,<br />Paytm</p>
        <hr style="border:none;border-top:1px solid #eee" />
        <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
          <p>Paytm Inc</p>
          <p>India</p>
        </div>
      </div>
    </div>`,
            });
            res.status(200).send(`${otp}`);
        } catch (e) {
            res.status(404).send("error");
        }
    }
}
//Mail send Otp
router.post("/", LoginController.Sendotp);

module.exports = router;
