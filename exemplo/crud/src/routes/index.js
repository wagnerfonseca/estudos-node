module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('<html><body><p>Home</p></body></html>');
    });
}