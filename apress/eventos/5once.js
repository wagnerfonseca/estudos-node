var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.once('apenasUmaVez', function(){
    console.log('...isso so vai executar uma vez....');
});

// Emit twice
emitter.emit('apenasUmaVez');
emitter.emit('apenasUmaVez');