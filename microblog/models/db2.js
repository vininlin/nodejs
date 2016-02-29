/**
 * Created by weining on 2015/11/25 0025.
 */


var settings = require('../settings');
var mongoose = require('mongoose');
var db = mongoose.createConnection("mongodb://127.0.0.1:27017/microblog");

db.on('error',function(error){
    console.log(error);
});

module.exports = db;