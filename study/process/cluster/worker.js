/**
 * Created by weining on 2015/11/19 0019.
 */


var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('handle by worker,pid is ' + process.pid + '\n');
    throw new Error('throw exception');
});

var worker ;
process.on('message',function(m,tcp){
    if(m == 'server'){
        worker  = tcp;
        worker.on('connection',function(socket){
            server.emit('connection',socket);
        });
    }
});

process.on('uncaughtException',function(){
    //记录日志
    console.log(err);
    //发送自杀信号
    process.send({act : 'suicide'});
    //停止接收新连接
    worker.close(function(){
        //所有连接断开后，退出进程
        process.exit(1);
    });
    //设置超时强制退出
    setTimeout(function(){
        process.exit(1);
    },5000);
});