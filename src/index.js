const dotenv =require('dotenv').config()
const express = require('express')
require('./config/db');
const mainRouter = require('./api/routes/index');
const { connect } = require('./config/db')

const app = express();

app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb', extended: false}))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-type')
next()
})
app.disable('x-powered-by')


app.use('/api', mainRouter)


app.use('*', (req, res, next) => {
  res.status(404).json({data: 'Página no encontrada'})
})

app.use((error, req, res, next) => {
  res.status(500).json({data: 'Error interno del servidor'})
})


const PORT = Number(process.env.PORT)

connect()
 
app.listen(PORT, () => {
console.log(`Servidor corriendo en puerto ${PORT}`)
})
  
  
