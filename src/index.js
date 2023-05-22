const express = require('express')
const dotenv =require('dotenv').config()
// require('./config/db')

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})