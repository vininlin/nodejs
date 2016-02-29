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
    //��¼��־
    console.log(err);
    //������ɱ�ź�
    process.send({act : 'suicide'});
    //ֹͣ����������
    worker.close(function(){
        //�������ӶϿ����˳�����
        process.exit(1);
    });
    //���ó�ʱǿ���˳�
    setTimeout(function(){
        process.exit(1);
    },5000);
});