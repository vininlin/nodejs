/**
 * Created by weining on 2015/11/18 0018.
 */


var http = require('http');
var server = http.createServer(function(req,res){
    res.write(200,{'Content-type': 'text/plain'});
    res.end('handle by child,pid is '  + process.pid + "\n");
});

process.on('message',function(m,tcp){
    if(m == 'server'){
        tcp.on('connection',function(socket){
            server.emit('connection',socket);
        });
    }
});