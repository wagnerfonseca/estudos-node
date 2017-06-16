var express = require('express');
var cookieSession = require('cookie-session');

var app = express()
    .use(cookieSession({
        keys: ['minha super chave secreta']
    }))
    .use('/home', function (req, res) {
        if (req.session.views) {
            req.session.views++;
        } else {
            req.session.views = 1;
        }
        res.end('Total de views para você: ' + req.session.views);
    })
    .use('/reset', function (req, res) {
        delete req.session.views;
        res.end('Limpando todas as suas views');
    })
    .listen(3000);