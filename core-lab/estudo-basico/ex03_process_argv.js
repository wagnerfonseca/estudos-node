/*
 Process - palavra resevada para o Node.
 Muito util para capturar os dados de entrada via periferico e dados de entrada
 
 **/

 // capturar os parametros no de execução no comando de linha
 // console.log(process.argv);
 function temParametros(params) {
 	return process.argv.indexOf(params) !== -1;
 }
 
 if (temParametros('--prod')) {
 	console.log('Atenção! em produção');
 } else {
 	console.log('sem problemas');
 }