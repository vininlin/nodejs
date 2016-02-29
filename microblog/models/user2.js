/**
 * Created by weining on 2015/11/24 0024.
 */


var mongoose = require('mongoose');
var db = require('./db2.js');

var userSchema = new mongoose.Schema({
    name : String,
    password : String
});

var User = db.model('User',userSchema);

module.exports = User;
