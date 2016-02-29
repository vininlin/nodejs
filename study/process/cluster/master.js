/**
 * Created by weining on 2015/11/19 0019.
 */


var fork = require('child_process').fork;
var cpus = require('os').cpus();

var server = require('net').createServer();
server.listen(1337);
console.log('server listening on ' + 1337);

//重启次数
var limit = 10;
//时间单位
var during  = 60000;
var restart = [];
var isTooFrequently = function(){
    //记录重启时间
    var time = Date.now();
    var length = restart.push(time);
    if(length > limit){
        //取出最后10个记录
        restart = restart.slice(limit * -1);
    }
    //最后一次重启到前10次重启之间的时间间隔
    return restart.length > limit && ( restart[length - 1] - restart[0]) < during;
};

var workers = {};
var createWorker = function(){
    //检查是否太过频繁重启
    if(isTooFrequently()){
        //发送giveup事件，不再重启
        process.emit('giveup',length,during);
        return;
    }
    var worker = fork(__dirname + "/worker.js");
    worker.on('message',function(message){
        if(message.act == 'suicide'){
            createWorker();
        }
    });
    worker.on('exit',function(){
        console.log('Worker ' + worker.pid + " exited");
        delete workers[worker.pid];
    });
    worker.send('server',server);
    workers[worker.pid] = worker;
    console.log('Create worker,pid=' + worker.pid)
};

for(var i = 0 ; i < cpus.length; i++){
    createWorker();
}

//进程退出时，退出所有子进程
process.on('exit',function(){
    for(pid in workers){
        workers[pid].kill();
    }
});