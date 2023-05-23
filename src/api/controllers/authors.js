const {getAllAuthorsFromDB, createAuthorInDB, getAuthorByIdFromDB, updateAuthorByIdInDB, deleteAuthorInDB} = require('../repositories/authors');

const getAllAuthors = async (req, res, next) => {
    const {filter} = req.query
    const authors = await getAllAuthorsFromDB(filter)
    res.status(200).json({data: authors})
    }
        
const createAuthor = async (req, res, next) => {
    const newAuthor = await createAuthorInDB({name: req.body.name})
    res.status(201).json({data: newAuthor})
    }
        
const getAuthorById = async (req, res, next) => {
    const {id} = req.params
    const author = await getAuthorByIdFromDB(id)
    res.status(200).json({data: author})
    }
    
const updateAuthorById = async (req, res, next) => {  
    const {id} = req.params
    const {name} = req.body
    const author = await updateAuthorByIdInDB(id, {name})
    res.status(200).json({data: author})
    }
        
const deleteAuthor = async (req, res, next) => {  
    const {id} = req.params
    deleteAuthorInDB(id)
    res.status(200).json({data: 'ok'})
    }
        
    
module.exports = {
        getAllAuthors,
        createAuthor,
        getAuthorById,
        updateAuthorById,
        deleteAuthor
    }
