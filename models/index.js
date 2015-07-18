var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/country-app');

module.exports.Country = require('./Country');
