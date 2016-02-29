/**
 * Created by weining on 2015/11/19 0019.
 */


process.on('SIGTERM',function(){
    console.log("got a SIGTERM ,exiting...");
    process.exit(1);
});

console.log('Server run with pid ' + process.pid);
process.kill(process.pid,'SIGTERM');