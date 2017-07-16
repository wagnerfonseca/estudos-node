var express = require('express');
var load = require('consign');
var bodyParser = require('body-parser');                         
var validator = require('express-validator'); 

module.exports = (function() {

    var app = express();
    
    app.set('view engine', 'ejs');

    app.set('views', './src/views' );

    // realizar a leitura dos arquivos estáticos
    //app.use(express.static('./src/public'));

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.use(validator());

    // auto carregamento
    load()
        .include('src/routes')
        .then('config/connection.js') // extensão .js para não confundir com diretorio
        .then('src/controllers')
        .then('src/models')
        .into(app);

    return app;
})();