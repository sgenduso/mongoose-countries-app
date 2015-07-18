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

router.get('/edit/:id', function(req, res, next) {
  
  res.render('edit', { title: 'Edit '+ country.name, id:req.params.id });
});



module.exports = router;
