var MongoClient = require('mongodb').MongoClient;

// Meu obejto de Person
var demoPerson = { nome: 'João', ultimoNome: 'Ninguem' };
var chaveProcura = { nome: 'João' };

// conectadno ao banco de dados 'demo'
MongoClient.connect('mongodb://127.0.0.1:27017/demo', function(err, db) {

    if(err) throw err;
    console.log('Conectado com sucesso!!!');

    // usar a coleção 'people'
    var collection = db.collection('people');
    collection.insert(demoPerson, function(err, docs) {
        // o insert retorna dentro da função de callback o objeto persistido
        console.log('Iserido', docs[0]);
        console.log('ID', demoPerson._id);

        collection.find(chaveProcura).toArray(function(err, results) {
            console.log('Resultados encontrados:', results);

            collection.remove(chaveProcura, function(err , results) {
                console.log('Person deletado!!!');

                db.close();
            });
        });
    });

});