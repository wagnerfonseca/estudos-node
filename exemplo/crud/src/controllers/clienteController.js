exports.index = function(app, req, res) {
    // Realizando uma conexao com a base de dados
    var conexao = app.config.connection; 
    var dao = new app.src.models.clienteDAO(conexao);

    dao.findAll(function(err, results){
        res.render('cliente/index', { clientes: results } );
    }); 
}

exports.novo = function(app, req, res) {
    res.render('cliente/form', {errors: {}, cliente: {}} );
}

exports.salvar = function(app, req, res) {

    var cliente = req.body;

    req.assert('nome', 'Nome deve ser informado!').notEmpty();
    req.assert('sobreNome', 'Sobre nome deve ser informado!').notEmpty();

    var errors = req.validationErrors();

    if (errors) {     
        res.render('cliente/form', {errors: errors, cliente: cliente} );
        return;
    }
    console.log(cliente);
    
    // Realizando uma conexao com a base de dados
    // var conexao = app.config.connection; 
    // var dao = new app.src.models.clienteDAO(conexao);

    // dao.salvar(cliente, function(err, result) {        
    //     res.redirect('/clientes');        
    // });    
    
}