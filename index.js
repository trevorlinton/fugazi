var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write("hello245");
  res.end();
}).listen(process.env.PORT);
