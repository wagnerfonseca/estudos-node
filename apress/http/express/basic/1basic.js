var express = require('express')
    , http = require('http');

var app = express()
            // Registra um middleware
            // o 'next' passa o controle para o proximo middleware registrado
            .use(function(req, res, next){
                res.end('hello express!');
            });

// registra com http
http.createServer(app)            
        .listen(3000);

console.log('servidor no ar', __dirname);        
