
// File Name: index.controllerr.js
// Student's Name: Plaban Biswas
// Student ID: 301344949
// Date: September 27, 2023

// Same signature (req, res)
// exports.render = (req, res) => {
//     res.send('Hello Express.js');
// }

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};
