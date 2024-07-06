const express = require('express');
const router = express.Router();
const Book = require('../model/model');

//CRUD operations. Create, Read, Update, Delete. POST, GET, PUT, DELETE.

//create a new book
router.post('/' , async (req, res) => {
    try{
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(200).json(
            {
                message: 'Book created',
                bookname: savedBook.title
            }
        );
    }catch(err){
        res.status(400).json({message: err});
    }
});

//get all books
router.get('/' , async (req, res) => {
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch(err){
        res.status(400).json({message: err});
    }
});

//get a specific book by name
router.get('/:bookName' , async (req, res) => {
    try{
        const book = await Book.findOne({title: req.params.title});
        res.status(200).json(book);
    }catch(err){
        res.status(400).json({message: err});
    }
});

//delete a specific book by name
router.delete('/:bookName' , async (req, res) => {
    try{
        const book = await Book.deleteOne({title: req.params.title});
        res.status(200).json(book);
    }catch(err){
        res.status(400).json({message: err});
    }
});

router.put('/:bookName' , async (req, res) => {
    try{
        const book = await Book.updateOne({title: req.params.title}, {$set: req.body});
        res.status(200).json(book);
    }catch(err){
        res.status(400).json({message: err});
    }
});

module.exports = router;