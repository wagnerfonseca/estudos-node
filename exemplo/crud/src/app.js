var express = require('express');
var load = require('consign');
var bodyParser = require('body-parser');

module.exports = (function() {

    var app = express();
    
    app.set('view engine', 'ejs');

    app.set('views', './src/views' );

    // realizar a leitura dos arquivos estáticos
    //app.use(express.static('./src/public'));

    app.use(bodyParser.urlencoded({ extended: true} ));
    //app.use(bodyParser.json());

    // auto carregamento
    load()
        .include('src/routes')
        .then('src/config/connection.js') // extensão .js para não confundir com diretorio
        .then('src/controllers')
        .into(app);

    return app;
})();