/**
 * Created by weining on 2015/11/27 0027.
 */


var mongoose = require('mongoose');
var db = require('./db2.js');
var moment = require('moment');

var postSchema = new mongoose.Schema({
    user : String,
    post : String,
    time : {type:Date,get: formatDate}
});
postSchema.index({user:1});

var Post = db.model('Post',postSchema);

function formatDate(time){
   return moment(time.getTime()).format('YYYY-MM-DD HH:mm:ss');
}

module.exports = Post;
