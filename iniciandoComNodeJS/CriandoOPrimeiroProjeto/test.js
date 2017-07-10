var http = require("http");

http.createServer(function(request, response) {
  console.log(request);
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  return response.end("Hello World");
}).listen(4000, '127.0.0.1');
