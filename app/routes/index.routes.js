// File Name: index.routes.js
// Student's Name: Plaban Biswas
// Student ID: 301344949
// Date: September 27, 2023
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// POST For Contact Form
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
