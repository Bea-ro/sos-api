/* eslint-disable linebreak-style */

const {
  getAllArtworksFromDB,
  createArtworkInDB,
  getArtworkByIdFromDB,
  updateArtworkByIdInDB,
  deleteArtworkInDB,
} = require('../repositories/artworks');

const getAllArtworks = async (req, res, next) => {
  const artworks = await getAllArtworksFromDB();
  res.status(200).json({ data: artworks });
};

const createArtwork = async (req, res, next) => {
  const newArtwork = await createArtworkInDB({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    area: req.body.area,
  });
  res.status(201).json({ data: newArtwork });
};

const getArtworkById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const artwork = await getArtworkByIdFromDB(id);
    res.status(200).json({ data: artwork });
  } catch (err) {
    res.status(404).json({ data: 'Obra no encontrada' });
  }
};

const updateArtworkById = async (req, res, next) => {
  const { id } = req.params;
  const {
    title, author, year, area,
  } = req.body;
  try {
    const artwork = await updateArtworkByIdInDB(id, {
      title, author, year, area,
    });
    res.status(200).json({ data: artwork });
  } catch (err) {
    res.status(404).json({ data: 'Obra no encontrada' });
  }
};

const deleteArtwork = async (req, res, next) => {
  const { id } = req.params;
  try {
    await deleteArtworkInDB(id);
    res.status(200).json({ data: 'Obra borrada' });
  } catch (err) {
    res.status(404).json({ data: 'Obra no encontrada' });
  }
};

module.exports = {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  updateArtworkById,
  deleteArtwork,
};
