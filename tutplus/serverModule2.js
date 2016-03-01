// create server by http module with eventemitter also we used file system stream to read and write operation

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function(req, res){
	fs.createReadStream('demo.html').pipe(res);
	
});

server.listen(3030);

// NOTE: use express module to create server, it is best.