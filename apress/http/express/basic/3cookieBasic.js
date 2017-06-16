var express = require('express');

var PORT = 3000;

var app = express()
    .use(function(req, res){
        res.cookie('nome', 'uma_valor_para_cookie');
        res.end('Hello!');
    })
    .listen(PORT);

console.log('O servidor esta ouvindo na porta %s!', PORT);