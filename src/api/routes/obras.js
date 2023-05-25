const express = require('express')
const {
  getAllArtworks,
  createArtwork,
  getArtworkById,
  updateArtworkById,
  deleteArtwork,
} = require('../controllers/artworks')
const router = express.Router()

router.get('/', getAllArtworks)
router.get('/:id', getArtworkById)
router.post('/', createArtwork)
router.put('/:id', updateArtworkById)
router.delete('/:id', deleteArtwork)

module.exports = router
