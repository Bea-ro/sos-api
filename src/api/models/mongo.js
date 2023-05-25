/* eslint-disable linebreak-style */

const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    movement: { type: String, required: true, trim: true },
    area: {
      type: [String],
      enum: ['painting', 'sculpture', 'arquitecture'],
      required: true,
    },
    mainArtworks: { type: [String], required: true },
  },
  {
    timestamps: true,
    collection: 'authors',
  }
)

const Author = mongoose.model('Author', AuthorSchema)

const ArtworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    area: {
      type: String,
      enum: ['painting', 'sculpture', 'arquitecture'],
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    collection: 'artworks',
  }
);

const Artwork = mongoose.model('Artwork', ArtworkSchema);

module.exports = { Author, Artwork };
