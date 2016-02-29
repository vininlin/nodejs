/**
 * Created by weining on 2015/11/13 0013.
 */


var http = require('http');

var options = {
    host: 'www.baidu.com',
    //port : 8888,
    path : '/',
    method : 'GET'
};

var request = http.request(options,function(res){
    console.log('status :' + res.statusCode);
    console.log('headers :' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data',function(chunk){
        console.log(chunk);
    });
});
request.on('error',function(err){
    console.log("error£º" + err);
});