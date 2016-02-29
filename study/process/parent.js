/**
 * Created by weining on 2015/11/18 0018.
 */


var child = require('child_process').fork('./child.js');

var server = require('net').createServer();
server.on('connection',function(socket){
    console.log("connection...");
    socket.end('handle by parent.\n');
});
server.listen(1337,function(){
    console.log('listening on port:%d',1337);
    child.send('server',server);
});