const Product = require('../models/mongo')

const getAllProductsFromDB = async () => {
  const products = await Product.find()
  return products
}

const createProductInDB = async (payload) => {
  const newProduct = new Product(payload)
  await newProduct.save()
  return newProduct
}

const updateProductInDB = async (id, payload) => {
  const product = await Product.findByIdAndUpdate(id, payload, { new: true })
  return product
}

const deleteProductInDB = async (id) => {
  await Product.findByIdAndDelete(id)
}

module.exports = {
  getAllProductsFromDB,
  createProductInDB,
  updateProductInDB,
  deleteProductInDB,
}
