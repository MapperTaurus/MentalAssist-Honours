const express = require('express');
const mongoose = require('mongoose');
const app = express ();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://bdtech:bdtech@cluster0.bw9vu.mongodb.net/MentalAssist?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    res.send('workinggg')
})

app.listen(4000, function() {
    console.log('Server is running');
})