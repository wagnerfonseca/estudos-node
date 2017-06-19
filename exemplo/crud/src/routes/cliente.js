module.exports = function(app) {
    app.route('/cliente')
        .get(function(req, res) {
            app.src.controllers.cliente.index(app, req, res);
        });
}