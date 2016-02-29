/**
 * Created by weining on 2015/11/5 0005.
 */


var events = require('events');
var util = require('util');
var Promise = function(){
    events.EventEmitter.call(this);
};

util.inherits(Promise,events.EventEmitter);

Promise.prototype.then = function(fulfilledHandler,errorHandler,progressHandler){
    if(typeof fulfilledHandler == 'function'){
        this.once('success',fulfilledHandler);
    }
    if(typeof errorHandler == 'function'){
        this.once('error',errorHandler);
    }
    if(typeof progressHandler == 'function'){
        this.on('progress',progressHandler);
    }
    return this;
};

var Deferred = function(){
    this.state = 'unfulfilled';
    this.promise = new Promise();
}

Deffered.prototype.resolve = function(obj){
    this.state = 'fulfilled';
    this.promise.emit('success',obj);
}

Deferred.prototype.reject = function(err){
    this.state = 'failed';
    this.promise.emit('error',err);
}

Deferred.prototype.progress = function(data){
    this.promise.emit('progress',data);
}

//把一个响应对象监听模式改成Promise/Deferred模式
res.setEncoding('utf-8');
res.on('data',function(chunk){
    console.log('BODY' + chunk);
});
res.on('end',function(){
    //done
});
res.on('error',function(){
    //error
});
//转化为：
res.then(function(){
    //done
},function(err){
    //error
},function(chunk){
    console.log('BODY' + chunk);
});
//改造封装
var promisify = function(res){
    var deferred = new Deferred();
    var result = '';
    res.on('data',function(chunk){
        result += chunk;
        deferred.progress(chunk);
    });
    res.on('end',function(){
        deferred.resolve(result);
    });
    res.on('error',function(err){
        deferred.reject(err);
    });
    return deferred.prromise;
}

promisfy(res).then(function(){
    //done
},function(err){
    //error
},function(chunk){
    console.log('BODY' + chunk);
});











