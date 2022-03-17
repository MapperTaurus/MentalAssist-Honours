const express = require('express');
const mongoose = require('mongoose');
const app = express ();
const ejs = require('ejs');

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://bdtech:bdtech@cluster0.bw9vu.mongodb.net/MentalAssist?retryWrites=true&w=majority');

const clinicsSchema = {
    name: String,
    address: String,
    phone: String,
    website: String
}

const clinic = mongoose.model('clinic', clinicsSchema);

app.get('/', (req, res) => {
    clinic.find({}, function(err, clinics) {
        res.render('index', {
            clinicsList: clinics
        })
    })
})

app.listen(4000, function() {
    console.log('Server is running on port 4000');
})