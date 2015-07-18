var express = require('express');
var router = express.Router();
var db = require('.././models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Country.find({}, function (err, countries) {
  res.render('index', { title: 'You\'re a Country', countries: countries});
});
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'New Country' });
});

router.post('/new', function(req, res, next) {
  db.Country.create(req.body, function (err, countries) {
    res.redirect('/');
  });
});

router.get('/countries/:id', function(req, res, next) {
  var id = req.params.id;
  db.Country.findOne({_id: id}, function (err, country) {
  res.render('show', { title: country.name, country: country });
});
});

router.get('/edit/:id', function(req, res, next) {
  var id = req.params.id;
  db.Country.findOne({_id: id}, function (err, country) {
  res.render('edit', { title: 'Edit '+ country.name, id:id, country:country });
});
});

router.post('/edit/:id', function (req, res, next) {
  var id = req.params.id;
  db.Country.update({_id: id}, req.body, function (err, country) {
    res.redirect('/');
  });
});

router.post('/delete/:id', function (req, res, next) {
  var id = req.params.id;
  db.Country.remove({_id: id}, function (err, country) {
    res.redirect('/');
  });
});


module.exports = router;
