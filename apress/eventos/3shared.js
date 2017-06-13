/**
 * Neste exemplo o parametro é compartilho entre os ouvintes
 * 
 */

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

emitter.on('foo', function (ev) {
    console.log('subscriber 1:', ev);
    ev.handled = true;
});

// Mesmo alterando o nome é o mesmo parametro
emitter.on('foo', function (ev1) {
    if (ev1.handled) {
        console.log('event already handled');
    } else {
        console.log('event no handled...');
    }
});
// Emit
emitter.emit('foo', { handled: false });