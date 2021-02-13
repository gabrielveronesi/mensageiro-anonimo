const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("./src/config/smtp");
const express = require("./src/config/customexpress")
const app = express();
const bodyParser = require('body-parser')

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
    const mailSent = transporter.sendMail({

      text: "http://wa.me/55"+req.body.NumeroWhats+" "+"CONTATO->"+" "+req.body.Mensagem,
      //text: req.body.Mensagem + " " + "NUMERO WHATS:"+ " -> " +req.body.NumeroWhats, //texto
      subject: req.body.Email, 
      from: "msga-enviamensagem@outlook.com", //quem vai enviar?
      to: ["msga-recebermensagem@outlook.com"],//quem vai receber?
    });
  }
  eenviarEmail()
  res.render("enviado")
 })

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

 app.get('/enviado', (req, res) => {
  res.render("enviado")
 })

 app.set('view engine', 'ejs');

