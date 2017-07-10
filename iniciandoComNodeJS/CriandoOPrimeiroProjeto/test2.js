var http = require("http");

function handleRequest(request, response) {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  var count = 2 + 2;

  return response.end("The value of count is => ".concat(count));
}

var server = http.createServer(handleRequest);

server.on('connection', function(client) {
  console.log('There is a new connection!!'.concat(client.remoteAddress));
});

server.listen(4000, '127.0.0.1');
