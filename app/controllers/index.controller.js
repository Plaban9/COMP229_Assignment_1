// Same signature (req, res)
// exports.render = (req, res) => {
//     res.send('Hello Express.js');
// }

exports.render = function (req, res) {
    res.render('index', {
        title: 'Hello World'
    })
};
