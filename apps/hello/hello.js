var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url === '/index.html' || req.url === '/') {
        fs.readFile('./index.html', function(_err, data) {
            if(_err) res.write(_err)

            res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length': data.length});
            res.write(data);
            res.end();
        });
    } else {
        fs.readFile('./404.html', function(_err, data) {
            if(_err) res.write(_err)

            res.writeHead(404, {'Content-Type': 'text/html', 'Content-Length': data.length});
            res.write(data);
            res.end();
        });
    }
}).listen(4000);
