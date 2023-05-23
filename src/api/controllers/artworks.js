const {getAllArtworksFromDB, createArtworkInDB, getArtworkByIdFromDB, updateArtworkByIdInDB, deleteArtworkInDB} = require('../repositories/artworks');

const getAllArtworks = async (req, res, next) => {
    const {filter} = req.query
    const artworks = await getAllArtworksFromDB(filter)
    res.status(200).json({data: artworks})
    }
        
const createArtwork = async (req, res, next) => {
    const newArtwork = await createArtworkInDB({name: req.body.name})
    res.status(201).json({data: newArtwork})
    }
        
const getArtworkById = async (req, res, next) => {
    const {id} = req.params
    const artwork = await getArtworkByIdFromDB(id)
    res.status(200).json({data: artwork})
    }
    
const updateArtworkById = async (req, res, next) => {  
    const {id} = req.params
    const {name} = req.body
    const artwork = await updateArtworkByIdInDB(id, {name})
    res.status(200).json({data: artwork})
    }
        
const deleteArtwork = async (req, res, next) => {  
    const {id} = req.params
    deleteArtworkInDB(id)
    res.status(200).json({data: 'ok'})
    }
        
    
module.exports = {
        getAllArtworks,
        createArtwork,
        getArtworkById,
        updateArtworkById,
        deleteArtwork
    }
