/**
 * Created by weining on 2015/10/28 0028.
 */


console.log(module.paths);


(function(exports,require,module,__filename,__dirname){
    var helloworld = require('./helloworld');
    exports.saySomething = function(){
        console.log('something');
    }
});