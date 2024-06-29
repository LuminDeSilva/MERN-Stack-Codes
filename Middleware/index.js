const express = require('express');
const app = express();

//Normal middleware triggering an error
app.get('/error', (req, res, next)=>{
    const err = new Error('This is an error'); //creating an error object
    err.status = 500; //setting the error status#
    next(err); //passing the error object to the next middleware
});

//Error middleware#
app.use((err, req, res, next) => {
    console.log(err.stack); //logging the error stack
    res.status(err.status || 500).send(err.message); //sending the error message
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});