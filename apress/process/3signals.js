setTimeout(function () {
    console.log('5 seconds passed. Exiting');
}, 5000);

// Não sai da execução enquanto não passar os 5 segundos

console.log('Started. Will exit in 5 seconds');
// Ignora o Ctrl+C para parar o processo no terminal
process.on('SIGINT', function () {
    console.log('Got SIGINT. Ignoring.');
});