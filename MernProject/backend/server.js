const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Books = require('./routes/books');

// app instance
const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Database connection
mongoose.connect('mongodb://localhost:27017/book_management_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected');
});

//Check connection
// mongoose.connection.once('open', () => {
//     console.log('Database connected');
// });

//Routes
app.use('/api/books', Books);

//Start server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});