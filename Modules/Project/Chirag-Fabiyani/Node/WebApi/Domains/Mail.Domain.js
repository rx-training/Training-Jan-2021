const nodemailer = require("nodemailer");


async function main(recipient,message) {
  let transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
    auth: {
      user: "chiragfabiyani.cf",
      pass: "1234chifab" 
    },
  });


  await transporter.sendMail({
    from: 'Chirag', 
    to: recipient,
    subject: "Olx Account", 
    text: message, 
    html: "<b>"+message+"</b>",
  });
}

module.exports = main;