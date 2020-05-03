var http = require('http');

http.createServer(function (_req, res) {
    res.write('Hello, Toronto!');
    res.end();
}).listen(4000);
