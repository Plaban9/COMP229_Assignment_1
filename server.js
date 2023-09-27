// File Name: server.js
// Student's Name: Plaban Biswas
// Student ID: 301344949
// Date: September 27, 2023
let PORT = 3000;

// var express = require('express');
// var indexController = require('./app/controllers/index.controller.js');
// var app = express();

// // Function is Middle Ware (Mounting the middleware)
// app.use('/', indexController.render);

// app.listen(PORT); //Turn on port
// console.log('Server running at http://localhost:' + PORT + '/');
// module.exports = app; // Return the application object
// Moved to express.js 

// Create a variable called app
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
let express = require('./config/express.js');
let app = express();

app.listen(PORT);
module.exports = app;

console.log('Server running at http://localhost:' + PORT + '/');
