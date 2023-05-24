const {
  getAllAuthorsFromDB,
  createAuthorInDB,
  getAuthorByIdFromDB,
  updateAuthorByIdInDB,
  deleteAuthorInDB,
} = require('../repositories/authors')

const getAllAuthors = async (req, res, next) => {
  const authors = await getAllAuthorsFromDB()
  res.status(200).json({ data: authors })
}

const createAuthor = async (req, res, next) => {
  const newAuthor = await createAuthorInDB({
    name: req.body.name,
    movement: req.body.movement,
    area: req.body.area,
    mainArtworks: req.body.mainArtworks,
  })
  res.status(201).json({ data: newAuthor })
}

const getAuthorById = async (req, res, next) => {
  const { id } = req.params
  try {
    const author = await getAuthorByIdFromDB(id)
    res.status(200).json({ data: author })
  } catch (err) {
    res.status(404).json({ data: 'Autor no encontrado' })
  }
}

const updateAuthorById = async (req, res, next) => {
  const { id } = req.params
  const { name, movement, area, mainArtworks } = req.body
  try {
    const author = await updateAuthorByIdInDB(id, { name, movement, area, mainArtworks })
    res.status(200).json({ data: author })
  } catch (err) {
    res.status(404).json({ data: 'Autor no encontrado' })
  }
}

const deleteAuthor = async (req, res, next) => {
  const { id } = req.params
  try {
    await deleteAuthorInDB(id)
    res.status(200).json({ data: 'Autor borrado' })
  } catch (err) {
    res.status(404).json({ data: 'Autor no encontrado' })
  }
}

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthorById,
  updateAuthorById,
  deleteAuthor,
}
