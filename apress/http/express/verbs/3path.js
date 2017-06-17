var express = require('express');

var app = express();

app.get('/', function(req, res) {
    res.send('Não passou nada');
});

app.get(/^\/[0-9]+$/, function(req, res) {
    console.log(req.url);
    res.send('Informou um número');
});

app.get('/*', function(req, res) {
    console.log(req.path);
    res.send('Não é um numero!!');
});

var PORT = 3000;
app.listen(PORT);
console.log('servidor rodando na porta %s!', PORT);