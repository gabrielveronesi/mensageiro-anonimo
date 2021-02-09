const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./config/smtp");

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

async function enviarEmail() {
  const mailSent = await transporter.sendMail({
    text: "aaaaaaaaaaaaaa", //texto
    subject: "Assunto do e-mail", 
    from: "thaisabreuu270@gmail.com", //quem vai enviar?
    to: ["gabriel.veronesi69@gmail.com"],//quem vai receber?
  });

  console.log(mailSent);
}


function funcao1()
{
  console.log(yarn, start);
alert("Eu sou um alert!");
}
//enviarEmail();

