var express = require('express');
var bodyParser = require('body-parser');

var PORT = 3000;
var app = express()
            .use(bodyParser())
            .use(function(req, res){
                if (req.body.foo) {
                    res.end('Body parsed! Value of foo: ' + req.body.foo);
                } else {
                    res.end('Body does not have foo!');
                }
            })
            .use(function(err, req, res, next){
                res.end('Invalid Body!');
            })
            .listen(PORT);

console.log('Servidor iniciado em %s', PORT);            