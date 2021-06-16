const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

var otp;

class Otp {
  static async sendOtp(req, res) {
    let email = req.params.email;
    otp = Math.floor(1000 + Math.random() * 9000);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "myntra.project.21@gmail.com",
        pass: "myntra@1234",
      },
    });
    let info = await transporter.sendMail({
      from: "myntra.project.21@gmail.com",
      to: email,
      subject: "One Time Password For Myntra Account",
      html: `
        <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
          <div style="margin:50px auto;width:70%;padding:20px 0">
            <div style="border-bottom:1px solid #eee">
              <a
                href="#"
                style="font-size:1.6em;color: #ff3f6c;text-decoration:none;font-weight:600"
              >
                Myntra
              </a>
            </div>
            <p style="font-size:1.3em">Hi,</p>
            <p style="font-size:1.2em">
              Thank you for choosing Myntra. Use the following OTP for the Email verification
            </p>
            <h2 style="background: #ff3f6c;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;letter-spacing:2px">
              ${otp}
            </h2>
            <p style="font-size:1.2em;">
              Regards,
              <br />
              Myntra
            </p>
            <hr style="border:none;border-top:1px solid #eee" />
          </div>
        </div>
      `,
    });

    res.send(`${otp}`);
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
