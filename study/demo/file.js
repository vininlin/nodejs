/**
 * Created by weining on 2015/10/3 0003.
 */

var fs = require('fs');
fs.readFile("test.txt","utf-8",function(err,data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});