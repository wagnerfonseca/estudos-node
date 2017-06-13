process.on('exit', function (code) {
    console.log('Exiting with code:', code);
});


// o evento de callback é chamado
// Este evento é util para debugar e propositos de log
process.exit(1);