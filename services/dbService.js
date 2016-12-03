// Help Node out by setting up define.
if (typeof exports === 'object' && typeof define !== 'function') {
  var define = function (factory) {
    factory(require, exports, module);
  };
}

define(function (require, exports, module) {

});


var MongoClient = require('mongodb').MongoClient;
var MONGOURL = 'mongodb://localhost:27017/db';
var db;
MongoClient.connect('mongodb://localhost:27017/db', function(err,database){
    if(err) {
      console.log("Couldn't connect to the DB");
      return
    }
    else {
      db = database;
      console.log("Connected to the database");
    }
});

function populateDatabase(){

  if(!db){
    console.log("No db");
    return;
  }

  var collection = db.collection('houses');
  collection.insert({
    title: 'house1',
    thumbnail: 'http://placehold.it/150x150?text=thumb',
    images: [
    'http://placehold.it/800x600?text=1',
    'http://placehold.it/800x600?text=2',
    'http://placehold.it/800x600?text=3'
    ],
    shortDescription: 'This is an awesome unit within walking distance to Queen\'s',
    longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    price: 500,
    priceInterval: 'Monthly',
    leaseType: 'Annual',
    landlordName: 'Jim Jom',
    latitude: '44.228646',
    longitude: '-76.502897',
    laundry: 'On Site',
    includedUtilities: [
    'Heat',
    'Hydro'
    ],
    isFurnished: true,
    numBedrooms: 3,
    numBathrooms: 2,
    hasCarParking: false,
    hasBikeParking: true,
    hasInternetIncluded: true,
  });

}

function getCollection(){
  var collection = db.collection('houses');

  return collection;
}


function getHouseList(callback) {
  db.collection('houses').find({}).toArray(function(err, docs) {
    if (err) {
      console.log("Failed to fetch house list in dbService");
      callback(err, null);
      return;
    }

    callback(null, docs);
  });
}


  function insertHouse(){




    db.collection('houses').insert();



  }



  
  function getHouse(id) {




    return db.collection('houses').find({_id:id});


  }

  module.exports = {
    getHouseList: getHouseList,
    getHouse: getHouse,
    populateDatabase: populateDatabase

  };


