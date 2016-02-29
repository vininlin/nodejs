/**
 * Created by weining on 2015/11/16 0016.
 */


var http = require('http');
http.createServer(function(req,res){
    res.writeHeader('200',{'Content-Type':'text/plain;charset=utf-8'});
    res.end('Hello world!\n');
}).listen(Math.round((1+Math.random())*1000),'127.0.0.1');