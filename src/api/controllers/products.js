/* eslint-disable linebreak-style */

const Product = require('../models/mongo')
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
    locations: req.body.locations,
  })
  res.status(201).json(newProduct)
}

const updateProduct = async (req, res, next) => {
  const { name } = req.params
  const { location } = req.body
  try {
    const product = await updateProductInDB(name, {
      $push: { locations: location },
    })
    console.log(product)
    res.status(200).json(product)
  } catch (err) {
    res.status(404).json('Producto no encontrado')
  }
}

const deleteProduct = async (req, res, next) => {
  const { id } = req.params
  try {
    await deleteProductInDB(id)
    res.status(200).json('Producto borrado')
  } catch (err) {
    res.status(404).json('Producto no encontrado')
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
}
