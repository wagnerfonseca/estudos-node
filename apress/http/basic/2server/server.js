var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        fs.createReadStream('./public/index.html').pipe(res);
    }
}).listen(3000);
console.log('server running on port 3000');