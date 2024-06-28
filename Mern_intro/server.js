const express = require('express');
const app = express(); 
const port = 3000;
const route = require('./Route/route'); //importing the route module

app.use('/route', route); //middleware. It is used to route the request to the route module

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});