var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    if(req.url === '/') {
        res.write('Hello, Toronto!');
    } else {
        res.statusCode = 404;
        res.write("I'm not just poor, son. I am destitute.");
    }

    res.end();
}).listen(4000);
