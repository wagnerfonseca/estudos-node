var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

// Emite um evento error
// desde então não existe nenhum ouvinte para este evento o processo termina
emitter.emit('error', new Error('Something horrible happend'));

console.log('this line never executes');