/**
 * Created by weining on 2015/11/12 0012.
 */

function(req,res){
    var buffers = [];
    req.on('data',function(trunk){
        buffers.push(trunk);
    }).on('end',function(){
        var bufffer = Buffer.concat(buffers);
        res.end('Hello world');
    });
}