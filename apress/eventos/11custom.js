var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;

// classe personalizada
function Foo() {
    EventEmitter.call(this);
}
inherits(Foo, EventEmitter);

// Exemplo de um membro da função que lança um evento
Foo.prototype.connect = function() {
    this.emit('connected');
}

// usage
var foo = new Foo();
foo.on('connected', function() {
    console.log('connected raised!');
});

foo.connect();