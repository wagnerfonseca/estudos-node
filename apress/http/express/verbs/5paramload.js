var express = require('express');

var app = express();

app.param('userId', function(req, res, next, userId) {
    res.write('pesquisando por usuario: ' + userId + '\n');

    // simula uma pesquisa por usuario e
    // carrega dentro de um objeto de requisição para um middleware superior
    req.user = {userId: userId };
    next();
});

app.get('/user/:userId', function(req, res) {
    res.end('Usuario é: ' + JSON.stringify(req.user));
});

app.listen(3000);