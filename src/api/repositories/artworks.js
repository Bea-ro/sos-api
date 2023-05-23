const {Artwork} = require('../models/mongo')

const getAllArtworksFromDB = async (filter) => {
const nameFilterOptions = {name: {$regex: new RegExp(filter, 'i')}}
const artworks = await Artwork.find(filter? nameFilterOptions : {});
return artworks
}

const createArtworkInDB = async (payload) => {
    const newArtwork = new Artwork(payload)
    await newArtwork.save()
return newArtwork
}

const getArtworkByIdFromDB = async (id) => {
const artwork = await Artwork.findById(id)
return artwork
}

const updateArtworkByIdInDB = async (id, payload) => {
const artwork = await Artwork.findByIdAndUpdate(id, payload, {new: true})
return artwork
}

const deleteArtworkInDB = async (id) => {
const artwork = await Artwork.findByIdAndDelete(id)
}

module.exports = {
    getAllArtworksFromDB,
    createArtworkInDB,
    getArtworkByIdFromDB,
    updateArtworkByIdInDB,
    deleteArtworkInDB
}