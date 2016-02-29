/**
 * Created by weining on 2015/11/8 0008.
 */


var str = "Œ“∞Ænodejs.js";
var buf = new Buffer(str,'utf-8');

console.log(buf);

//<Buffer                                         6e 6f 64 65 6a 73 2e 6a 73>
//<Buffer ef bf bd d2 b0 ef bf bd 6e 6f 64 65 6a 73 2e 6a 73>