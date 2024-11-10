require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strict', false)
mongoose.set('strictPopulate', false)
mongoose.set('strictQuery', false)

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Conectado a BD')
  } catch (error) {
    console.log(error, 'No conectado a BD')
  }
}

module.exports = { connect }
