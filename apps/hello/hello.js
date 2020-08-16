var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url === '/index.html' || req.url === '/') {
        fs.readFile('./index.html', function(_err, data) {
            res.end(data);
        });
    } else {
        res.statusCode = 404;

        fs.readFile('./404.html', function(_err, data) {
            res.end(data);
        });
    }
}).listen(4000);
