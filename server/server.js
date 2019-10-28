const nodemailer = require('nodemailer')
const config = require('./config')
const restify = require('restify')
const bodyParser = require('body-parser')
const corsMiddleware = require('restify-cors-middleware')

const port = process.env.PORT || 3032

// Middleware CORS
const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

// init server
const server = restify.createServer()

// handle cross origin problem
server.pre(cors.preflight)
server.use(cors.actual)

//query & bodyparse to use data send by url
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.bodyParser({ mapParams: true }))
server.use(restify.plugins.fullResponse())

// setup email config
// para poder recibir correos de cuentas no segurs en gmail
// https://myaccount.google.com/lesssecureapps
const smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'infodwebapps@gmail.com',
    pass: 'admin2019@_',
  }
})

// send email POST with nodemailer
server.post('/send', function create(req, res, next) {
  let email = {
    from: req.params.email,
    to: 'infodwebapps@gmail.com',
    subject: req.params.asunto,
    html: `<div>
      <h1>Nombre de quien envía:<b>${req.params.nombre}</b></h1><br/>
      <p>
      <b>El asunto del mensaje es:</b>${req.params.asunto}<br/>
      <b>El mensaje es :</b>${req.params.mensaje}<br/>
      <b>Email de ${req.params.nombre} es:</b>${req.params.email}
      </div> 
    `
  }
  
  smtpTransport.sendMail(email, (err, response) => {
    if(error) {
      console.log("Email sending error")
      console.log(error)
    } else {
      console.log('correo enviado con exito')
    }
    smtpTransport.close()
  })
  res.send(201, req.params)
  next()
})

// test endPoint
server.get('/', (req, res, next) => {
  res.send({ saludo: 'server ready!' })
  next()
})

server.listen(port, () => {
  console.log('ready server on %s', server.url)
})