/* eslint-disable linebreak-style */

const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    image: { type: String, required: false, trim: true },
    isRequired: { type: Boolean, required: true },
    isDonated: { type: Boolean, required: true },
    locations: { type: [String], required: true },
  },
  {
    timestamps: true,
    collection: 'products',
  }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
