const nodemailer = require("nodemailer");

async function mailTo(to,subject,text,html){
    try{
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'redbusapis@gmail.com',
                pass: 'redbus698'
            }
        });

        let mailOptions = {
            from: 'sdvadhiya222@gmail.com',
            to: to, 
            subject: subject, 
            text: text, 
            html: html, 
        };
        let info = await transporter.sendMail(mailOptions,(error, info) => {
            if (error) {
                return console.log(error.message);
            }
            console.log('success');
        });
    } catch(ex) {
        console.log(ex.message);
    } 
}

module.exports = mailTo