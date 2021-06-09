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
                html: `<h3 style = 'color : green'> OTP Verification :  ${otp} </h3> \n Please do not share 
                this with anyone for security reasons `,
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
