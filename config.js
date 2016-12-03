var MongoClient = require('mongodb').MongoClient;
var MONGOURL = 'mongodb://localhost:27017/db';
var db;
MongoClient.connect('mongodb://localhost:27017/db', function(err,db){
    if(err) {
      console.log("Couldn't connect to the DB");
      return
    }
    db = db;
});