/**
 * Created by weining on 2015/11/17 0017.
 */


var cp = require('child_process');
cp.spawn('node',['worker.js']);
cp.exec('node worker.js',function(err,stdout,stderr){
    //some code
});
cp.execFile('worker.js',function(err,stdout,stderr){
    //some code
});
cp.fork('./worker.js');

//parent.js
var cp = require('child_process');
var n = cp.fork('./sub.js');
n.on('message',function(m){
    console.log('PARENT got message m:%s',m);
});
n.send({hello : 'world'});

//sub.js
process.on('message',function(m){
    console.log('CHILD got message m:%s',m);
});
process.send({foo: 'bar'});