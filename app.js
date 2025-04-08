const express = require('express');
const cors = require('cors');
const app = express();
const fruits = require('./routes/fruits');

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/fruits', fruits);

app.get('/', (req, res) => {
    res.send('Hello Fruity!');
});

module.exports = app;