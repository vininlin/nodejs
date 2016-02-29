/**
 * Created by weining on 2015/11/9 0009.
 */


var net = require('net');

var server = net.createServer(function(socket){
    //新的连接
    socket.on('data',function(data){
        socket.write('Hello ,NodeJs');
        console.log(data.toString());
    });
    socket.on('end', function () {
        console.log('connection close.');
    });
});

server.listen(1337,function(){
   console.log('listening on 1337..');
});