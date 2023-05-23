const express = require('express')
const authorsRouter = require('./autores');
const artworksRouter = require('./obras')

const router = express.Router()

router.use('/autores', authorsRouter) 
router.use('/obras', artworksRouter) 
// router.use('/', (req, res, next) => {
//     return res.status(200).json('Esto funciona');
// })

module.exports = router