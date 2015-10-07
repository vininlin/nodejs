/**
 * Created by weining on 2015/10/3 0003.
 */

var http = require('http');
http.createServer(function(req,resp){
    resp.writeHead(200,{'ContentType':'text/html'});
    resp.write('<h1>Node.js</h1>');
    resp.end("<p>Hello world</p>");
}).listen(3000);
console.log("HTTP SERVER is listenning at port 3000")
