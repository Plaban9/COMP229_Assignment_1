// ---- Week 3 ---- 
// var express = require('express');
// var indexController = require("../app/controllers/index.controller.js");
// var app = express();

// // Initialize app (Only passing render object)
// app.use('/', indexController.render);

//returns app's reference
// module.exports = app;
// ---- Week 3 ---- 

//Reference from the Material Supplied (Used as tempplate)
var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

module.exports = function () {
    var app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));

    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
     app.use('/', require('../app/routes/index.routes.js'));
    //require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use('/favicon.ico', express.static('/img/favicon.ico'));
    
    return app;
};