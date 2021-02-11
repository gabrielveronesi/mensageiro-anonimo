const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./src/config/smtp");
const express = require("./src/config/customexpress")
const app = express();
//const PORT = process.env.PORT || 3000;
   /* 
    app.listen(PORT, () => {
      console.log('Servidor rodando na porta 3000')
    })
*/

app.listen(process.env.PORT || 3000);

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




app.patch('/enviaremail', (req, res) => {
  function enviarEmail() {
    const mailSent = transporter.sendMail({
      text: "bbbbaaaaaaaaaa", //texto
      subject: "Assunto do e-mail", 
      from: "thaisabreuu270@gmail.com", //quem vai enviar?
      to: ["gabriel.veronesi69@gmail.com"],//quem vai receber?
    });
  }
  enviarEmail();
 })

 app.get('/', (req, res) => {
  res.render("index")
 })

 app.get('/formulario', (req, res) => {
  res.render("formulario")
 })

 app.set('view engine', 'ejs');

//enviarEmail();

