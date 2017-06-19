var mongo = require('mongodb');

var connectionMongoDB = function() {
    console.log('conexao de conexão...');
    var db = new mongo.db(
        'crud_basico',
        new mongo.Server(
            'localhost',
            27017,
            {} // configuracao opcionais
        ),
        {}
    );

    return db;
}

module.exports = function() {
    return connectionMongoDB;
}