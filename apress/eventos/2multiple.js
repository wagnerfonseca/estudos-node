var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function() {
    console.log('subscriber 1');
});

emitter.on('foo', function() {
    console.log('subscriber 3');
});

emitter.on('foo', function() {
    console.log('subscriber 2');
});

// os listener são chamados na ordem em que são declarados
emitter.emit('foo');