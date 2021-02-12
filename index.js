const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./src/config/smtp");
const express = require("./src/config/customexpress")
const app = express();
const bodyParser = require('body-parser')

//const PORT = process.env.PORT || 3000;
   /* 
    app.listen(PORT, () => {
      console.log('Servidor rodando na porta 3000')
    })
*/

//Body Parser
 app.use(bodyParser.urlencoded({extended:false}))
 app.use(bodyParser.json())

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

app.post('/enviaremail', (req, res) => {

  function eenviarEmail() {
    console.log(req.body.email);
    console.log(req.body.email);
    const mailSent = transporter.sendMail({
      text: "emailll", //texto
      subject: "Assunto do e-mail", 
      from: "msga-enviamensagem@outlook.com", //quem vai enviar?
      to: ["msga-recebermensagem@outlook.com"],//quem vai receber?
    });
  }
  eenviarEmail();
 })

 https://www.youtube.com/watch?v=P1OI_EKyl6U&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=22

 /*

app.post('/enviaremail', (req, res) => {
  function eenviarEmail() {
    const mailSent = transporter.sendMail({
      text: emaill, //texto
      subject: "Assunto do e-mail", 
      from: "msga-enviamensagem@outlook.com", //quem vai enviar?
      to: ["msga-recebermensagem@outlook.com"],//quem vai receber?
    });
  }
  eenviarEmail();
 })

*/

 app.get('/', (req, res) => {
  res.render("index")
 })

 app.get('/formulario', (req, res) => {
  res.render("formulario")
 })

 app.get('/contato', (req, res) => {
  res.render("contato")
 })

 app.get('/modelo', (req, res) => {
  res.render("modelo")
 })


 app.set('view engine', 'ejs');

