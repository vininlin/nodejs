/**
 * Created by weining on 2015/11/18 0018.
 */



process.on('message',function(m,server){
    if(m == 'sever'){
        sever.on('connection',function(socket){
            socket.end('handle by child \n');
        });
    }
});