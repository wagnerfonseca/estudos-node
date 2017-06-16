var express = require('express');

var PORT = 3000;

var app = express()
    .use(function(req, res){
        console.log('---cliente requisitou cabeçalho cookies: \n', req.headers['cookie']);
        res.cookie('nome_cookie', 'valor_do_cookie');
        res.end('Hello!');
    })
    .listen(PORT);

console.log('servidor ouvindo na porta %s!', PORT);    