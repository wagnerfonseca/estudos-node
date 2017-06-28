var express = require('express');

var app = express();

// uma vez que é informado um parametro este vai ser o middleware executado primeiro
app.param('userId', function(req, res, next, userId) {
    console.log('pesquisando o usario ...')
    res.write('pesquisando por usuario: ' + userId + '\n');

    // simula uma pesquisa por usuario e
    // carrega dentro de um objeto de requisição para um middleware superior
    req.user = {userId: userId };
    next(); // para devolver no middleware em que foi chamado
});

app.get('/user/:userId', function(req, res) {
    console.log('chamando o usuario')
    res.end('Usuario é: ' + JSON.stringify(req.user));
});

app.listen(3000);