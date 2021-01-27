const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAILER_USER,    
      pass: process.env.MAILER_PASS
    }
  });


transporter.verify().then(()=>{
  console.log('Listo para enviar mails')
})

module.exports = transporter