var ClienteDAO = function(connection) {
    // returna o objeto 'db'
    this._connection = connection();
}

ClienteDAO.prototype.salvar = function(src) {
    this._connection.open( function(err, mongoClient) {
        mongoClient.collection( 'cliente', function(err, collection) {
            collection.insert(src);
            mongoClient.close();
        });
    } );
}

module.exports = function() {
    return ClienteDAO;
}