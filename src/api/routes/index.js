const express = require('express')
const authorsRouter = require('./autores')
const artworksRouter = require('./obras')

const router = express.Router()

router.use('/autores', authorsRouter)
router.use('/obras', artworksRouter)

module.exports = router
