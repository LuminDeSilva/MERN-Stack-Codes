const express = require('express');
const route = express.Router(); //express instance. Router is a method in express

const Books = require('../models/Books');

//get all books
route.get('/', (req, res) => {
    Books.find().then((books) => {
        res.json(books);
    }).catch((err) => {
        res.status(400).json({ error: err });
    });
});

//Add a new book
route.post('/add', (req, res) => {
    const newBook = new Books({
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        published_year: req.body.published_year,
        publisher: req.body.publisher,
    }); //creating a new book object
    newBook.save().then((book) => {
        res.json(book);
    }).catch((err) => {
        res.status(400).json({ error: err });
    });
});

//get a book by id
route.get('/:id', (req, res) => {
    Books.findById(req.params.id).then((book) => {
        res.json(book);
    }).catch((err) => {
        res.status(400).json({ error: err });
    });
});

//update a book by id
route.put('/update/:id', (req, res) => {
    Books.findById(req.params.id).then((book) => {
        book.title = req.body.title;
        book.author = req.body.author;
        book.description = req.body.description;
        book.published_year = req.body.published_year;
        book.publisher = req.body.publisher;
        book.save().then((book) => {
            res.json(book);
        }).catch((err) => {
            res.status(400).json({ error: err });
        }); //save the updated book
    }).catch((err) => {
        res.status(400).json({ error: err });
    });
});

//delete a book by id
route.delete('/delete/:id', (req, res) => {
    Books.findByIdAndDelete(req.params.id).then((book) => {
        res.json(book);
    }).catch((err) => {
        res.status(400).json({ error: err });
    });
});

module.exports = route; //exporting the route module