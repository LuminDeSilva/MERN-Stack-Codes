const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bookRoute = require('./route/route');

//middleware
app.use(bodyParser.json());

//mongoDB connection
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//route
app.use('/books', bookRoute);

//start server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});