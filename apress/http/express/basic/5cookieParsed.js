var express = require('express');

var cookieParser = require('cookie-parser');

var app = express()
    .use(cookieParser())
    .use(function(req, res){
        if (req.cookies.nome_cookie) {
            console.log('Valor para chave cookie: ', req.cookies.nome_cookie);
        } else {
            res.cookie('nome_cookie', 'o valor do meu cookie');
        }
        res.end('Hello!!!!');
    })
    .listen(3000);


// somente via http
//  (res.cookie(name,value,{httpOnly:true})

// usar https
// todo a informação é criptografada
// res.cookie(name,value,{secure:true})

// tempo para expirar
// res.cookie('foo', 'bar', { maxAge: 900000, httpOnly: true })
