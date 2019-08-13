var nodemailer = require('nodemailer')
var config = require('./config')
var restify = require('restify')
var bodyParser = require('body-parser')
var corsMiddleware = require('restify-cors-middleware')


const port = process.env.PORT || 3032

// Middleware CORS
var cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['API-Token'],
  exposeHeaders: ['API-Token-Expiry']
})

// init server

var server = restify.createServer()

// handle cross origin problem
server.pre(cors.preflight)
server.use(cors.actual)

//query & bodyparse to use data send by url
server.use(restify.plugins.queryParser({
  mapParams: true
}))

server.use(restify.plugins.bodyParser({
  mapParams: true
}))

server.use(restify.plugins.fullResponse())
// setup email config
// para poder recibir correos de cuentas no segurs en gmail
// https://myaccount.google.com/lesssecureapps
var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: config.USER,
    pass: config.PASS,
  }
})

// enviamos correo mediante POST con nodemailer
server.post('/send', function create(req, res, next) {
  let email = {
    from: req.params.email,
    to: 'johnnysepulveda988@gmail.com',
    subject: req.params.asunto,
    html: `<b>name</b>: ${req.params.nombre}<br/><b>Message:</b>${req.params.mensaje}<br/><b>Email:</b>${req.params.email}`
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

})

// un endpoint de prueba
server.get('/', (req, res, next) => {
  res.send({ saludo: 'El server esta ready .!.' })
  next()
})

server.listen(port, () => {
  console.log('ready server on %s', server.url)
})


