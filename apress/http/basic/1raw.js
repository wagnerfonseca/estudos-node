var http = require('http');

var server = http.createServer(function (req, res) {
	console.log('servidor iniciando ...');

	// Mostra os dados do cabeçalho de requisicao
	console.log(req.headers);


	res.write('Ola Cliente!!!');
	res.end();
});

var PORT = 3000;
server.listen(PORT);
console.log('Servidor esta rodando em http://127.0.0.1:%s', PORT);