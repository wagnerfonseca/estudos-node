module.exports = function(app) {
    app.get('/', function(req, res) {
        app.src.controllers.indexController.home(app, req, res);
    });
}