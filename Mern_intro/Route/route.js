const express = require('express');
const route = express.Router(); //express instance. Router is a method in express

route.get('/hello', (req, res) => {
    res.send('Hello server');
});

route.get('/welcome', (req, res) => {
    res.send('Welcome to the server');
});

module.exports = route; //exporting the route module