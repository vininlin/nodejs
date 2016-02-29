/**
 * Created by weining on 2015/11/10 0010.
 */


var dgram = require('dgram');

var server = dgram.createSocket('udp4');

server.on('message',function(msg,rinfo){
    console.log('server got msg ' + msg + ' from ' + rinfo.address + ':' + rinfo.port);
});

server.on('listening',function(){
    var address = server.address();
    console.log('server listening ' + address.address + ':' + address.port);
});

server.bind(41234);