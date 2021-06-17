const nodemailer = require("nodemailer");


async function main(recipient,message) {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: "react.olx.clone@gmail.com",
      pass: "1234Olxclone@" 
    },
  });


  await transporter.sendMail({
    from: 'Olx Admin', 
    to: recipient,
    subject: "Olx Account", 
    text: message, 
    html: "<b>"+message+"</b>",
  });
}

module.exports = main;