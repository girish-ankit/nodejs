// Basic use of http module to create server
var http = require('http');

var server = http.createServer(function(request, response){
	
	
	response.write('<h1>Server Demo</h1>');
	// NOTE: request object contains all the information about requested information
	response.write('<p>Request Method: '+request.method+'</p>');
	response.write('<p>Request URL: '+request.url+'</p>');
	response.end();
	
});

server.listen(3000);

//NOTE: use express module to create server, it is best.