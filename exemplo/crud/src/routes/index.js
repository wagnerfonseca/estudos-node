module.exports = function(app) {
    app.get('/', function(req, res) {
        app.src.controllers.index.home(app, req, res);
    });
}