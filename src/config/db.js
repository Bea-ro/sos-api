const dotenv =require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strict', false)
mongoose.set('strictPopulate', false)
mongoose.set('strictQuery', false);

const connect = async() => {
try {
    await mongoose.connect(process.env.MONGO_URI)
        console.error('Conectado a BD')
} catch (error) {
      console.error(error, 'No conectado a BD');
}
}

  module.exports = { connect }