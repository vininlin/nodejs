/**
 * Created by weining on 2015/11/2 0002.
 */

var events = require('events');
var util = require('util');

function MyStream(){
    events.EventEmitter.call(this);
}

util.inherits(MyStream,events.EventEmitter);

MyStream.prototype.write = function(data){
    this.emit('data',data);
}

var stream = new MyStream();
stream.on('data',function(data){
    console.log('receive data %s',data);
});

stream.write('hello~!');

var proxy = new events.EventEmitter();
var status = 'ready';
var select = function(callback){
    proxy.once('selected',callback);
    if(status == 'ready'){
        status = 'pending';
        db.select('sql',function(results){
            proxy.emit('selected',results);
            status = 'ready';
        });
    }
};

var count = 0 ;
var result = {};
var done = function(key,value){
    result[key] = value;
    count++;
    if(count == 3){
        //‰÷»æ“≥√Ê
        render(results);
    }
};

fs.readFile(template_path,'utf-8',function(err,template){
    done('template',template);
});

db.query(sql,function(err,data){
    done('data',data);
});

110n.get(function(err,resources){
    done('resources',resources);
});

var after = function(times,callback){
    var count = 0; var result = {};
    return function(key,value){
        result[key] = value;
        count++;
        if(count == times){
            callback(results);
        }
    }
}

var done = after(times,render);

var emitter = new events.EventEmitter();
var done = after(times,callback);

emitter.on('done',done);
emitter.on('done',other);

fs.readFile(template_path,'utf-8',function(err,template){
    emitter.emit('done','template',template);
});

db.query(sql,function(err,data){
    done('done','data',data);
});

110n.get(function(err,resources){
    done('done','resources',resources);
});
