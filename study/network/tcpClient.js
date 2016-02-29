/**
 * Created by weining on 2015/11/9 0009.
 */


var net = require('net');

var client = net.connect({port:1337},function(){
    console.log('client connect...');
    client.write('world!\r\n');
});

client.on('data',function(data){
    console.log(data.toString());
    client.end();
});

client.on('end',function(){
    console.log('client disconnect...');
});
