const http = require('http');
const os = require('os');

console.log("Server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've hit " + os.hostname() + " on v1\n");
};

var www = http.createServer(handler);
www.listen(8080);