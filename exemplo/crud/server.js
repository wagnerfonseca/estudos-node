var app = require('./src/app')();

var PORT = 8157;
app.listen(PORT, function() {
    console.log('Servidor ouvindo na porta %s!', PORT);
});