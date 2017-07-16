module.exports = function(app) {
    app.get('/clientes', function(req, res) {
        app.src.controllers.clienteController.index(app, req, res);
    });
    app.get('/cliente', function(req, res) {
        app.src.controllers.clienteController.novo(app, req, res);
    });
    app.post('/cliente', function(req, res) {
        app.src.controllers.clienteController.salvar(app, req, res);
    });
}