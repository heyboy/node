// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});

 var foo = 1;

  if(foo) {	
   		response.end("<h3>Hello Foo</h3>\n");
	}
else {
   		response.end("<h3>Hello Baa</h3>\n");

}
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
