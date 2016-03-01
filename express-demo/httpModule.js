var http = require('http');

var myServer = http.createServer(function(req, res){

	/* Setting response header, 'Content-Type' sets mime type it value may be 'text/plain' or 
	  you can find all mime type from http://www.sitepoint.com/web-foundations/mime-types-complete-list/
	 */

    // #1>. for plain text
	// res.writeHead(200, {"Content-Type":"text/plain"});
	// #2>. for html text
	res.writeHead(200, {"Content-Type":"text/html"});
	res.write("<b>Hello</b> ankit");
	res.end();

});

myServer.listen(8080);