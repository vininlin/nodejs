/**
 * Created by weining on 2015/11/21 0021.
 */


var cluster = require('cluster');
var http = require('http');
var numCPUS = require('os').cpus().length;

if(cluster.isMaster){
    //fork workers
    for(var i = 0; i < numCPUS; i++){
        cluster.fork();
    }
    cluster.on('exit',function(worker,code,signal){
        console.log('Worker ' + worker.process.pid + 'died');
    });
}else{
    http.createServer(function(req,res){
        res.writeHead(100)
        res.end();
    }).listen(8000);
}