/**
 * Created by weining on 2015/10/9 0009.
 */

var mongodb = require('./db.js');

function User(user){
    this.name = user.name;
    this.password = user.password;
}

module.exports = User;

User.prototype.save = function save(callback){
    var user = {
        name: this.name,
        password: this.password
    };
    mongodb.open(function(err,db){
        if(err){
            return callback(err);
        }
        //读取users集合
        db.collection('users',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //为name属性添加索引
            collection.ensureIndex('name',{unique: true});
            //写入user文档
            collection.insert(user,{safe: true},function(err,user){
                mongodb.close();
                callback(err,user);
            });
        });

    });
}

User.get = function get(username,callback){
    console.log("username=%s",username);
    mongodb.open(function(err,db){
        if(err) return callback(err);
        //读取users集合
        db.collection('users',function(err,collection){
            if(err){
                mongodb.close();
                return callback(err);
            }
            //查找name属性为username的文档
            collection.findOne({name: username},function(err,doc){
                mongodb.close();
                console.log("doc=%s",doc);
                if(doc){
                    //封装为user对象
                    var user = new User(doc);
                    callback(err,user);
                }else{
                    callback(err,null);
                }
            });
        });
    });
}