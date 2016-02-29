/**
 * Created by weining on 2015/11/14 0014.
 */


var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHeader('200',{'Content-Type':'text/plain;charset=utf-8'});
    res.end('Hello world!');
});
server.listen(8888,function(){
    console.log('http server listen on 8888');
});