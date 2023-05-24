const { Author } = require('../models/mongo')

const getAllAuthorsFromDB = async () => {
  const authors = await Author.find()
  return authors
}

const createAuthorInDB = async (payload) => {
  const newAuthor = new Author(payload)
  await newAuthor.save()
  return newAuthor
}

const getAuthorByIdFromDB = async (id) => {
  const author = await Author.findById(id)
  return author
}

const updateAuthorByIdInDB = async (id, payload) => {
  const author = await Author.findByIdAndUpdate(id, payload, { new: true })
  return author
}

const deleteAuthorInDB = async (id) => {
  const author = await Author.findByIdAndDelete(id)
}

module.exports = {
  getAllAuthorsFromDB,
  createAuthorInDB,
  getAuthorByIdFromDB,
  updateAuthorByIdInDB,
  deleteAuthorInDB,
}
