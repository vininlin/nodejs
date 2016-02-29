/**
 * Created by weining on 2015/11/9 0009.
 */


var net = require('net');

var server = net.createServer(function(socket){
    socket.write('Echo Server\r\n');
    socket.pipe(socket);
});

server.listen(1337,'127.0.0.1');