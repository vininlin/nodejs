/**
 * Created by weining on 2015/11/16 0016.
 */


var fork = require('child_process').fork;
var  cpus = require('os').cpus();
console.log(cpus.length)
for(var i = 0 ; i < cpus.length; i++){
    fork('./worker.js');
}

