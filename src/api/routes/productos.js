const express = require('express')
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)
router.post('/', createProduct)
router.put('/:name', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
