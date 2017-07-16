function ClienteDAO(connection) {
    // returna o objeto 'db'
    this._db = connection();
}

ClienteDAO.prototype.salvar = function(src, callback) {
    this._db.open( function(err, mongoClient) {
        mongoClient.collection( 'cliente', function(err, collection) {
            collection.insert(src, callback);
            mongoClient.close();
        });
    } );
}

ClienteDAO.prototype.findAll = function(callback) {
    this._db.open( function(err, db) {
        db.collection( 'cliente', function(err, collection) {
            collection.find().toArray(callback);
            db.close();
        })
    });
}

module.exports = function() {
    return ClienteDAO;
}