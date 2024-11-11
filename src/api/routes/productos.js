const express = require('express')
const { getAllProducts, createProduct, deleteProduct } = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)

module.exports = router
