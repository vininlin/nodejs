/**
 * Created by weining on 2015/10/3 0003.
 */
var events = require('events');

var emitter = new events.EventEmitter();

emitter.on("someEvent",function(arg1,arg2){
    console.log("listener1",arg1,arg2);
});

emitter.on("someEvent",function(arg1,arg2){
    console.log("listener2",arg1,arg2);
});

emitter.emit("someEvent","vinin","1983");
//emitter.emit('error');