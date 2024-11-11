/* eslint-disable linebreak-style */

const {
  getAllProductsFromDB,
  createProductInDB,
  deleteProductInDB,
} = require('../repositories/products')

const getAllProducts = async (req, res, next) => {
  const products = await getAllProductsFromDB()
  res.status(200).json({ data: products })
}

const createProduct = async (req, res, next) => {
  const newProduct = await createProductInDB({
    name: req.body.name,
    locations: [req.body.location],
  })
  res.status(201).json({ data: newProduct })
}

const deleteProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    await deleteProductInDB(id)
    res.status(200).json({ data: 'Producto borrado' })
  } catch (err) {
    res.status(404).json({ data: 'Producto no encontrado' })
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  deleteProduct,
}
