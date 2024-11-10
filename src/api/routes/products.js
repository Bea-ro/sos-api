const express = require('express')
const {
  getAllProducts,
  createProduct,
  updateProductById,
  deleteProduct,
} = require('../controllers/products')

const router = express.Router()

router.get('/', getAllProducts)
router.post('/', createProduct)
router.put('/:id', updateProductById)
router.delete('/:id', deleteProduct)

module.exports = router
