var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (req, res) {
    if (req.url === '/' || req.url === '/index.html') {
        res.writeHead(200, {'Content-Type': 'text/html'});

        fs.readFile(path.resolve(__dirname, 'index.html'), function (
            _err,
            data
        ) {
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});

        fs.readFile(path.resolve(__dirname, '404.html'), function (_err, data) {
            res.write(data);
            res.end();
        });
    }
}).listen(4000);
