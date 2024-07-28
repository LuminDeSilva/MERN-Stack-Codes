const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    publiished_year: {
        type: Number,
    },
    publisher: {
        type: String,
    },
});

module.exports = mongoose.model('Books', BookSchema); //exporting the Books model