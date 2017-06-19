var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');

module.exports = function() {

    var app = express();

    app.set('views engine', 'ejs');

    app.set('views', './src/views' );

    app.use(bodyParser.urlencoded({ extended: true} ));
    app.use(bodyParser.json());

    // auto carregamento
    load('routes', { cwd: 'src'} )
        .into(app);

    return app;
}