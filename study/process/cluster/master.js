/**
 * Created by weining on 2015/11/19 0019.
 */


var fork = require('child_process').fork;
var cpus = require('os').cpus();

var server = require('net').createServer();
server.listen(1337);
console.log('server listening on ' + 1337);

//��������
var limit = 10;
//ʱ�䵥λ
var during  = 60000;
var restart = [];
var isTooFrequently = function(){
    //��¼����ʱ��
    var time = Date.now();
    var length = restart.push(time);
    if(length > limit){
        //ȡ�����10����¼
        restart = restart.slice(limit * -1);
    }
    //���һ��������ǰ10������֮���ʱ����
    return restart.length > limit && ( restart[length - 1] - restart[0]) < during;
};

var workers = {};
var createWorker = function(){
    //����Ƿ�̫��Ƶ������
    if(isTooFrequently()){
        //����giveup�¼�����������
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

//�����˳�ʱ���˳������ӽ���
process.on('exit',function(){
    for(pid in workers){
        workers[pid].kill();
    }
});