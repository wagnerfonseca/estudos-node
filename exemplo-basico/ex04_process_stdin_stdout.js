process.stdout.write('Esta apredendo JS? ');
process.stdin.on('data', function(data) { // evento 'data' enveto de entrada via periferico
	process.stdout.write(`Sua resposta foi ${data.toString()}obrigado!\n`); // classe (`) backstick para o template string
	// para sair
	process.exit();
})