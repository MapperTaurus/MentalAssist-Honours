const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
var path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb+srv://bdtech:bdtech@cluster0.bw9vu.mongodb.net/MentalAssist?retryWrites=true&w=majority');

const clinicsSchema = {
    name: String,
    address: String,
    phone: String,
    website: String
}

const clinic = mongoose.model('clinic', clinicsSchema);

app.get('/clinics', (req, res) => {
    clinic.find({}, function (err, clinics) {
        res.render('clinics', {
            clinicsList: clinics
        })
    })
})

app.get('/mindfulness', (req, res) => {
    res.render('mindfulness')
})

app.get('/habits', (req, res) => {
    res.render('habits')
})

app.get('/diet', (req, res) => {
    res.render('diet')
})

app.get('/lockdown', (req, res) => {

    res.render('lockdown')
})

app.get('/', (req, res) => {

    res.render('index')
})

app.listen(4000, function () {
    console.log('Server is running on port 4000');
    console.log('\u001b[1;32mTo enter the website visit: http://localhost:4000/');
    
})