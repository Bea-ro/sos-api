/* eslint-disable linebreak-style */

const {
  getAllProductsFromDB,
  createProductInDB,
  updateProductInDB,
  deleteProductInDB,
} = require('../repositories/products')

const getAllProducts = async (req, res, next) => {
  const products = await getAllProductsFromDB()
  res.status(200).json(products)
}

const createProduct = async (req, res, next) => {
  const newProduct = await createProductInDB({
    name: req.body.name,
    location: [req.body.location],
  })
  res.status(201).json({ data: newProduct })
}

const updateProduct = async (req, res, next) => {
  const { id } = req.params
  const { isRequired } = req.body
  try {
    const product = await updateProductInDB(id, { isRequired })
    res.status(200).json({ data: product })
  } catch (err) {
    res.status(404).json({ data: 'Producto no encontrado' })
  }
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
  updateProduct,
  deleteProduct,
}
