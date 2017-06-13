var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

// Assinatura
emitter.on('foo', function(a1, a2){
    // function ouvinte - Listener
    console.log('Foo raised, arg1 %s, arg2 %s', a1, a2);
});

// Emissor
// Lançador
emitter.emit('foo', 123,  "Teste");