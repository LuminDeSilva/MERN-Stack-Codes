//Output from the server "Hello server"
const express = require('express');
const app = express(); //express instance
const port = 3000;  //port number

//CRUD operations - Create, Read, Update, Delete
//GET, POST, PUT, DELETE
//GET - Read
//POST - Create
//PUT - Update
//DELETE - Delete
//Client Server Architecture. Client sends request to server and server sends response to client
//Client - Browser, Postman
//Server - Node.js
app.get('/hello', (req, res) => {
    res.send('Hello server');
});

//URL - Uniform Resource Locator
//http://localhost:3000/hello

//http - protocol
//localhost - domain name

//listen - method. It listens to the port number
//ES6 - EcmaScript 6. Latest version of JavaScript.
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});