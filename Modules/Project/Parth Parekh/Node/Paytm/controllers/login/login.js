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
        let email = "irctcdemo1@gmail.com";
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: USER,
                pass: PASS
            },
        });

        let info = await transporter.sendMail({
            from: USER,
            to: email,
            subject: "Verification",
            html: `<h3 style = 'color : green'> OTP Verification :  ${otp} </h3> \n Please do not share 
            this with anyone for security reasons `,
        });

        res.send(`otp sent: ${info.messageId}`);
     }

    static async verifyotp(req, res) {
        let Otpverify = req.params.otp;
        if (otp == Otpverify) {
            res.send("Verification Success");
        } else {
            res.send("Not Valid Otp");
        }
    }
}

//Mail send Otp
router.post("/", LoginController.Sendotp);

//Veify Otp
router.post("/:otp", LoginController.verifyotp);

module.exports = router;
