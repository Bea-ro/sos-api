const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema(
    {
		name: {type: String, required: true, trim: true},
		style: {type: String, required: true, trim: true},
		mainArtworks: {
			type: String,
			enum: ['painting', 'sculpture', 'arquitecture'],
			required: true
		  }
	},
	{
		timestamps: true, collection: "authors" 
	}
)

const Author = mongoose.model('Author', AuthorSchema)

const ArtworkSchema = new mongoose.Schema(
    {
		title: {type: String, required: true, trim: true},
		author: {type: String, required: true, trim: true},
		year: {type: Number, required: true},
        style: {type: String, required: true}
	},
	{
		timestamps: true, collection: "artworks" 
	}
)

const Artwork = mongoose.model('Artwork', ArtworkSchema)

module.exports = {Author, Artwork}




	