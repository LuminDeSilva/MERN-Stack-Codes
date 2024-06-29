const express = require('express');
const app = express();

//Normal middleware
app.use((req, res, next) => {
    console.log('Hello middleware');
    next(); //next() is a function that calls the next middleware
});

//route trigger an error
app.get('/error', (req, res, next)=>{
    const err = new Error('This is an error'); //creating an error object
    next(err); 
});

//Error middleware
app.use((err, req, res, next) => {
    console.log('Error middleware');
    res.status(500).send('There was an error'); 
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});