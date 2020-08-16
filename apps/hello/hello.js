var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    if(req.url === '/index.html' || req.url === '/') {
        fs.readFileSync('./index.html', function(_err, data) {
            res.write(data);
            res.end();
        });
    } else {
        res.statusCode = 404;

        fs.readFileSync('./404.html', function(_err, data) {
            res.write(data);
            res.end();
        });
    }
}).listen(4000);
