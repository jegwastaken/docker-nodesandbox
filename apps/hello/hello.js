var http = require('http');

http.createServer(function (_req, res) {
    res.write('Hello World!').end();
}).listen(4000);
