const express = require('express');
const app = express();
const fruits = require('./routes/fruits');

// Middleware
app.use(express.json()); 

// Routes
app.use('/fruits', fruits);

app.get('/', (req, res) => {
    res.send('Hello Fruity!');
});

module.exports = app;