const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

var otp = Math.floor(1000 + Math.random() * 9000);

class Otp {
    static async sendOtp(req, res) {
        let email = req.params.email;
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "hms.project.21@gmail.com",
                pass: "hms@1234",
            },
        });
        let info = await transporter.sendMail({
            from: "hms.project.21@gmail.com",
            to: email,
            subject: "OTP",
            html: `<h4>Your otp for email verificatin is ${otp}</h4>`,
        });

        res.send(`Otp sent successfully: ${info.messageId}`);
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

// sending otp
router.post("/send/:email", Otp.sendOtp);

// verify otp
router.post("/verify/:otp", Otp.verifyOtp);

module.exports = router;