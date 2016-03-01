var connect = require("connect");
var port = 3000;
var hostname = '127.0.0.1';

var app = connect();

function sayHello(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Connect');
}

app.use(sayHello);
app.use(sayHello);
app.listen(port, hostname);

console.log('Server running at http://${hostname}:${port}/');
