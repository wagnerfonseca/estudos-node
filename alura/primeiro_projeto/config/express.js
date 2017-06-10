var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


module.exports = function() {

    var app = express();
    // Template de páginas dinâmica
    app.set('view engine', 'ejs'); // variaveis 'ambiente' do express

    // qual a pasta padrão de views
    app.set('views', './app/views'); // ../ para voltar a pasta não funciona


    // esse comando forma um interceptador entre o cliente e servidor
    // é chamado de middleware
    app.use(bodyParser.urlencoded({ extended: true })); // Duas forma de consumir dados quando um recurso é chamado
    app.use(bodyParser.json()); // prepara seus recursos para consumir JSON

    // express-validator
    app.use(expressValidator());

    // auto carregamento 
    // cwd -> restringe a procura do node pelas pasta 'routes e db'
    load('routes', { cwd: 'app' })
        .then('db')
        .into(app);

    return app;
}