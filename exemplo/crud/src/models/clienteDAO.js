function ClienteDAO(connection) {
    // returna o objeto 'db'
    this._db = connection();
}

ClienteDAO.prototype.salvar = function(src) {
    this._db.open( function(err, mongoClient) {
        mongoClient.collection( 'cliente', function(err, collection) {
            collection.insert(src);
            mongoClient.close();
        });
    } );
}

ClienteDAO.prototype.findAll = function(callback) {
    this._db.open( function(err, db) {
        db.collection( 'cliente', function(err, collection) {
            collection.find().toArray(callback);
        })
    });
}

module.exports = function() {
    return ClienteDAO;
}