// const http = require('http');

//create a server object:
// http.createServer(function (req, res) {
  // res.write('Hello World!'); //write a response to the client
  // res.end(); //end the response
// }).listen(8080);

const http = require('http');
const { constants } = require('os');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('Hello World!');
  res.end();
}).listen(8082);