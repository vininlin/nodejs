/**
 * Created by weining on 2015/11/10 0010.
 */


var dgram = require('dgram');

var message = new Buffer("NodeJs");
var client = dgram.createSocket('udp4');
client.send(message,0,message.length,41234,'localhost',function(err,bytes){
    client.close();
})