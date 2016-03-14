var request = require('request');
var http = require('http');
var data = '';

request.post('http://128.199.75.112/custom-data-export/doc-detail', {form:{authKey: "!@#admin123", did: "388"}},  function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
    data = body;
  }
});

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "application/json;"});
  response.end(data);
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8080);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8080/");
