const mongoose = require('mongoose');

//create bookSchema
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishDate: Date,
    pages: Number,
    genre: String
});

//create book model
const Book = mongoose.model('Book', bookSchema);

//export book model
module.exports = Book;
